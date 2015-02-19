"""Key value store using Google Cloud Endpoints.

I wanted to write a simple key value store so I can rapidly iterate my 
javascript without having to update the datastore each time.

*search*
To support searching, I will include tag feilds which can be queried
to find some sublist of maching responses.

*modifying*
To support modifying, I will include a find and replace map reduce
job.

Example

    put
        id="explanation user39 math-5-2",
        value="I really get it now!",
        tags=["explanation", "math-5-2"]
    
    get
        id="explanation user39 math-5-2",    
    
    query
        tags=["explanation", "math-5-2"]

    replace
        find="old.*"
        replace="new.*"
        actually_run=1

TODO
    Add a permissions mechanism
"""

import endpoints
import json
import logging
import mapper
import re
from google.appengine.ext import deferred
from google.appengine.ext import ndb
from google.appengine.runtime import DeadlineExceededError
from protorpc import messages
from protorpc import message_types
from protorpc import remote
from datetime import datetime
from time import mktime


##########################################################################
#
# Util
#
#
def string_to_datetime(string): 
    return datetime.strptime(string, "%Y-%m-%dT%H:%M:%S.%fZ")

def datetime_to_string(dt): 
    return dt.isoformat() + "Z"  # Z designates UTC time by RFC 3339

# JSON does not encode datetime
# if it is encountered, make it an iso860 string
date_time_encoder = lambda obj: (
    datetime_to_string(obj)
    if isinstance(obj, datetime)
    else None)


##########################################################################
#
# Model
#
#
class Item(ndb.Model):
    """Model to store any entity.
    """
    value = ndb.TextProperty(required=True)
    tags = ndb.StringProperty(repeated=True)
    modified = ndb.DateTimeProperty()

    def to_json(self):
        result = super(Item, self).to_dict()
        # add the id, which gets ignored by to_dict
        result['id'] = self.key.id() 
        # jsonify, and specify the rules for json conversion
        result = json.dumps(result, default = date_time_encoder)
        return result

    @classmethod
    def from_json(cls, json_string):
        item = json.loads(json_string)
        # Modified time gets stringified during json conversion
        # bring it back to us
        item['modified'] = string_to_datetime(item['modified'])
        return Item(**item)

    def to_message(self):
        """Turns an Item into a ProtoRPC object."""
        return ItemResponse(id=self.key.id().decode('utf-8'),
                            value=self.value,
                            tags=self.tags,
                            modified=datetime_to_string(self.modified))

    @classmethod
    def put_from_message(cls, message):
        """Inserts or update an item."""
        entity = cls(id=message.id,
                     value=message.value,
                     tags=message.tags)
        entity.modified = datetime.now()
        entity.put()
        return entity

    @classmethod
    def get_from_message(cls, message):
        """Gets the items matching the message."""
        entity = cls.get_by_id(message.id)
        if not entity:
            raise KeyError("No item with the id: " + message.id)
        return entity

    @classmethod
    def delete_from_message(cls, message):
        """Delete the item matching the message."""
        entity = cls.get_by_id(message.id)
        if not entity:
            raise KeyError("No item with the id: " + message.id)
        else:
            entity.key.delete()

    @classmethod
    def query_from_message(cls, message):
        """Gets all items with all of the given tags."""
        query = Item.query()
        query = query.order(-cls.modified)

        if message.before:
            before = string_to_datetime(message.before)
            query = query.filter(Item.modified < before)

        for tag in message.tags:
            query = query.filter(Item.tags == tag)

        return query.fetch(1000)


##########################################################################
#
# Replace
#
# Basic regex find and replace for Items.  Changes are logged.

logging_message = """
Search and Replace:
{} searching for {} and replacing with {}.

{}

    becomes

{}
"""
class ItemReplacer(mapper.Mapper):
    KIND = Item
    find = ''
    replace = ''
    mode = 'Preview'

    def map(self, entity):
        original = entity.to_json()
        updated = re.sub(self.find, self.replace, original)
        a_change_was_made = original != updated
        if a_change_was_made:
            logging.info(logging_message.format(self.mode,
                                                self.find,
                                                self.replace,
                                                original,
                                                updated))

        if (self.mode == 'Actually') and a_change_was_made:
            updated = Item.from_json(updated)
            return ([updated], [entity])

        return([], [])

    @classmethod
    def replace_from_message(cls, message):
        replacer = cls()
        replacer.find = message.find
        replacer.replace = message.replace
        if message.actually_run:
            replacer.mode = 'Actually'

        # replacer.run() # testing - remove

        deferred.defer(replacer.run)

        return "See results by <a href='https://appengine.google.com/logs?app_id=s~haley-academy&tz=US%2FPacific&filter=Search+and+Replace'>" \
               "searching the logs for find and replace</a>."


##########################################################################
#
# Messages
#
#

class ItemPutRequest(messages.Message):
    """Item to be inserted."""
    id = messages.StringField(1, required=True)
    value = messages.StringField(2, required=True)
    tags = messages.StringField(3, repeated=True)

class ItemGetRequest(messages.Message):
    """Item to be inserted."""
    id = messages.StringField(1, required=True)

class ItemDeleteRequest(messages.Message):
    """Item to be deleted."""
    id = messages.StringField(1, required=True)

class ItemQueryRequest(messages.Message):
    """Return items with matching tags."""
    tags = messages.StringField(1, repeated=True)
    before = messages.StringField(2)  # A datetime string

class ItemResponse(messages.Message):
    """Item that has been stored."""
    id = messages.StringField(1, required=True)
    value = messages.StringField(2, required=True)
    tags = messages.StringField(3, repeated=True)
    modified = messages.StringField(4, required=True)

class NoneResponse(messages.Message):
    """Nothing to see here."""

class ItemListResponse(messages.Message):
    """A list of stored items."""
    items = messages.MessageField(ItemResponse, 1, repeated=True)

class ItemReplaceRequest(messages.Message):
    """Find and replace."""
    find = messages.StringField(1, required=True)
    replace = messages.StringField(2, required=True)
    actually_run = messages.BooleanField(3, default=False)

class ItemReplaceResponse(messages.Message):
    """Link to logs"""
    response = messages.StringField(1, required=True)


##########################################################################
#
# API
#
#

@endpoints.api(name='api', version='v2')
class Api(remote.Service):
    """API v2."""

    # Items

    @endpoints.method(ItemPutRequest, ItemResponse,
                      path='item', http_method='POST',
                      name='put')
    def put_item(self, request):
        """Exposes an API endpoint to insert an item."""
        entity = Item.put_from_message(request)
        return entity.to_message()

    @endpoints.method(ItemGetRequest, ItemResponse,
                      path='item', http_method='GET',
                      name='get')
    def get_item(self, request):
        """Exposes an API endpoint to get an item by id."""
        entity = Item.get_from_message(request)
        return entity.to_message()

    @endpoints.method(ItemDeleteRequest, NoneResponse,
                      path='item', http_method='DELETE',
                      name='delete')
    def delete_item(self, request):
        """Exposes an API endpoint to delete an item by id."""
        Item.delete_from_message(request)
        return NoneResponse()


    @endpoints.method(ItemQueryRequest, ItemListResponse,
                      path='query', http_method='GET',
                      name='query')
    def query_items(self, request):
        """Exposes an API endpoint to query for items."""
        items = Item.query_from_message(request)
        items = [item.to_message() for item in items]
        return ItemListResponse(items=items)

    @endpoints.method(ItemReplaceRequest, ItemReplaceResponse,
                      path='replace', http_method='GET',
                      name='replace')
    def replace_items(self, request):
        """Exposes an API endpoint to query for items."""
        response = ItemReplacer.replace_from_message(request)
        return ItemReplaceResponse(response=response)


APPLICATION = endpoints.api_server([Api])
