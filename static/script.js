/*
Run an test

This script allows students to do everything they need to do to take
an test.  This includes:

  1. Answering, grading, and discussing problems
  2. Seeing their overall progress
  
Have fun!

Ben
*/

/* Clean javascript */
"use strict";

/* External resources */
var _;
var $;
var angular;
var test;
var moment;

/* IE compatibil
ity */
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

/* Teachers */
var teachers = ["Ben Haley", "Mr. Weglarz"]

/* Tests */
var tests = [
  {
    "id": "math",
    "name": "math",
    "source": "math.json"
  },
  {
    "id": "math_2",
    "name": "math II",
    "source": "math_2.json"
  },
  {
    "id": "english",
    "name": "english",
    "source": "english.json"
  },
  {
    "id": "english_2",
    "name": "english II",
    "source": "english_2.json"
  },
  {
    "id": "reading",
    "name": "reading",
    "source": "reading.json"
  },
  {
    "id": "science",
    "name": "science",
    "source": "science.json"
  },
  {
    "id": "science_2",
    "name": "science II",
    "source": "science_2.json"
  },
]

/* Our app */
var app = angular.module('myApp', ['ui.bootstrap', 'angularLocalStorage', 'ngResource', 'infinite-scroll']);

/* Our controller */
app.controller('controller', [
  '$scope', 
  '$modal', 
  '$sce', 
  'storage', 
  '$resource', 
  '$http',
  '$timeout',
  function($scope, $modal, $sce, storage, $resource, $http, $timeout) {

  /* 
   * Unsorted
   * new functions that don't have a nice home yet.
   */
  $scope.should_show_problem_in_signature = function() {
    return $scope.is_history_showing();
  };
  
  /* Api
   * A simple key value store with tagging.
   */
  var Item = $resource('https://haley-academy.appspot.com/_ah/api/api/v2/item');
  var Query = $resource('https://haley-academy.appspot.com/_ah/api/api/v2/query');
  
  // objects
  $scope.hash = function(obj) {
    return JSON.stringify(obj);
  };
  $scope.cancel_my = function(item) {
    item.content = item.saved_content || '';
    delete item.editing;
    delete item.saving;
    delete item.save_failed;
    if(!item.content) {
      $scope.delete_locally(item);
    }
  };
  $scope.new_item = function(type, options) {
     options =  options || {};

    // make a new object
    var item = {
      content: "",
      user: $scope.user,
      type: type,
      id: $scope.random(),
      modified: new Date(),
      // Default to current problem, unless otherwise specified
      test: $scope.test.id,
      section: $scope.problem.section,
      number: $scope.problem.number
    };
    
    // add options
    _.map(options, function(v, k) {item[k] = $scope.deep_clone(v);});
    
    return item;
  };
  $scope.get_parent = function(child, candidates) {
    return _.find(candidates, function(candidate) {
      return candidate.id == child.parent;
    });
  };
  $scope.delete_locally = function(item) {
    var parent;
    
    // comments
    if(item.type == 'comment') {
      parent = $scope.get_parent(item, $scope.discussion.contributions);
      parent.comments = _.reject(parent.comments, $scope.is_my);
    } 
    
    // contributions
    if(item.type == 'contribution') {
      $scope.discussion.contributions = _.reject($scope.discussion.contributions, $scope.is_my);
    }
    
    // upvotes
    if(item.type == 'vote' && item.content == 'up') {
      parent = $scope.get_parent(item, $scope.discussion.contributions);
      parent.upvotes = _.reject(parent.upvotes, $scope.is_my);
    }

    // downvotes
    if(item.type == 'vote' && item.content == 'down') {
      parent = $scope.get_parent(item, $scope.discussion.contributions);
      parent.downvotes = _.reject(parent.downvotes, $scope.is_my);
    }
  };
  $scope.delete_remotely = function(item, callback, retry_delay) {
    // Don't delete if the user is logged out
    if(!$scope.user) { return; }
    
    // Record the act of deletion
    item.deleting = true;
    delete item.delete_failed;
    
    // Wait before trying to delete again
    retry_delay = retry_delay || 10;
    
    // Remove remotely
    var remote = new Item();
    remote.$delete({
      id: $scope.server_id(item)
    }, function(){
      // Delete succeeded
      delete item.deleting;
      callback();
    }, function(){
      // Delete attempt failed
      
      // Increase the retry delay exponetially
      retry_delay = retry_delay * 2;
      
      // Stop trying at some point
      if(retry_delay > 2000) {
        item.delete_failed = true;
        delete item.deleting;
      }
      
      // Try to delete again
      $timeout(function(){
        $scope.delete_remotely(item, callback, retry_delay);
      }, retry_delay);
    });
  };
  $scope.delete_item = function(item) {
    // Remove from server
    $scope.delete_remotely(item, function(){
      // Then remove it locally
      $scope.delete_locally(item);
      
      // record the time of this action
      $scope.problem.last_save = $scope.now();
    });
  };
  $scope.get_tags = function(item) {
    var tags = [item.type, 
                $scope.old_problem_id(
                  $scope.get_problem_number(item.section, item.number),
                  item.test
                ), 
                $scope.format_problem_id(
                  item.number, 
                  item.section, 
                  item.test),
                item.user,
                item.test];
    
    // Give a common label for discussion items.
    if(_.contains(['contribution', 'vote', 'comment'], item.type)) {
      tags.push("discussion");
    }
    
    return tags;
  };
  $scope.bind = function(child, parent) {
    $scope.add_parent(child, parent);
    $scope.add_child(child, parent);
  }
  $scope.add_parent = function(child, parent) {
    // Add parent information to the child
    child.parent = parent.id;
    child.parent_user = parent.user;
    child.parent_type = parent.type;
    child.test = parent.test || child.test;
    child.section = parent.section || child.section;
    child.number = parent.number || child.number;
  };
  $scope.add_child = function(child, parent) {
    // Add child information the parent
    var containter = $scope.pluralize(child.type);
    if(child.type == 'vote' && child.content == 'up') { containter = 'upvotes'; }
    if(child.type == 'vote' && child.content == 'down') { containter = 'downvotes'; }
    parent[containter] = parent[containter] || [];
    parent[containter].push(child);
  };
  $scope.save_item = function(item, options) {
    options = options || {}

    // Don't save if the user is logged out
    if(!$scope.user){ return; }
    
    // Wait before trying to save again
    options.retry_delay = options.retry_delay || 10;
    
    // Add parent information
    if(options.parent){
      $scope.add_parent(item, options.parent);
    }

    // Add item info
    item.saved_content = item.content;
    item.server_id = $scope.server_id(item);
    
    // Record the most recent save attempt for this problem
    $scope.problem.last_save = $scope.now();

    // note the attempt to save
    item.saving = true;
    delete item.save_failed;

    // A copy of the item to save
    // (because we don't want to save every property)
    var copy_to_save = $scope.deep_clone(item);
    delete copy_to_save.editing;
    delete copy_to_save.saving;
    
    // save to server
    var remote = new Item();
    remote.value = JSON.stringify(copy_to_save);
    remote.id = item.server_id;
    remote.tags = $scope.get_tags(copy_to_save);
    
    remote.$save(function() {
      
      // Saving was a success, editing is over
      delete item.editing;
      delete item.saving;
      
      // Add to parent locally
      if(options.parent) {
        $scope.add_child(item, options.parent);
      }
    }, function() {
      // Saving failed, try again 
      
      // exponentially increase the retry delay
      options.retry_delay = options.retry_delay * 2;
      options.retry = true;
      
      // don't retry if the user cancled the action
      if(!item.saving) { return; }
      
      // Stop retrying at some point
      if(options.retry_delay > 2000) {
        item.save_failed = true;
        delete item.saving;
      }
      
      // Call the retry again      
      $timeout(function(){
        $scope.save_item(item, options);
      }, options.retry_delay);
    });
  };
  $scope.load_item = function(item){
    var object = JSON.parse(item.value);
    object.modified = item.modified;
    object.server_id = $scope.server_id(object);
    return object;
  };
  $scope.edit_item = function(item) {
    item.saved_content = item.content || '';
    item.editing = true;
  };
  $scope.i_have_any = function(item_list) {
    return(_.any(item_list, $scope.is_my));
  };
  $scope.get_my = function(item_list) {
    return _.find(item_list, $scope.is_my);
  };
  $scope.is_my = function(item) {
    return item.user == $scope.user;
  };
  
  // users
  $scope.users = function() {
    return _.unique(_.pluck($scope.history, 'user')).sort();
  };
  $scope.is_teacher = function() {
    return _.contains(teachers, $scope.user);
  };
  $scope.log_in = function(name) {
    
    // Define the user
    var user = name;
    
    // Reset local memory
    $scope.reset(user);

    // Reset the log in message if there was any
    $scope.log_in_message = ''
  };
  $scope.log_out = function(){
    $scope.user = "";
    $scope.reset();
  };
  $scope.user_is_logged_in = function() {
    return $scope.user;
  };
  $scope.ask_user_to_log_in = function(prompt) {
    $('#log_in_modal').modal('show'); 
    $scope.log_in_message = prompt;
  };
  $scope.is_me = function(user) {
    return user === $scope.user;
  };
  
  // history
  $scope.set_user_to_show = function(user) {
    if(user == 'everyone'){ 
      $scope.history_to_show = 'everyones'
    }
    $scope.user_to_show = user;
  };
  $scope.most_recent_event_time = function(criteria) {
    var event = _.max($scope.filter_history(criteria), function(e){ return moment(e.modified); });
    return moment(event.modified);
  };
  $scope.oldest_event_time = function(criteria) {
    var event = _.min($scope.filter_history(criteria), function(e){ return moment(e.modified); });
    return moment(event.modified);
  };
  $scope.count_events = function(criteria) {
    return $scope.filter_history(criteria).length;
  };
  $scope.filter_history = _.memoize(function(criteria, history) {
    /*
    Get a subset of history
    (all criteria are optional)
    {
      'by_user': 'Yasmin',
      'parent_user': 'Mr. Weglarz',
      'before': moment().startOf('week'),
      'after': moment().subtract(1, 'weeks').startOf('week'),
      'types': ['contribution', 'comment'],
      'content': 'a regex substring',
    }
    memoized because this can be slow.
    */
    
    // Default values
    history = typeof history !== 'undefined' ? history : $scope.history;
    criteria = criteria || {};
    
    // Take advantage of memoization
    // If there are multiple criteria apply them one at a time
    var intermediate_history = [];
    var processing_order = ['types', 'after', 'before', 'by_user', 'parent_user'];
    var next_criterion;
    if(_.intersection(Object.keys(criteria), processing_order).length > 1) {
      next_criterion = _.find(
        processing_order, 
        function(c) {return c in criteria}
      );
      intermediate_history = $scope.filter_history(
        _.pick(criteria, next_criterion),
        history
      );
      return $scope.filter_history(_.omit(criteria, next_criterion), intermediate_history);
    }
    
    // Filter
    return _.filter(history, function(event) {
      var by_user = !criteria.by_user || 
                    event.user == criteria.by_user;
                    
      var parent_user = !criteria.parent_user ||
                        event.parent_user == criteria.parent_user;
          
      var after = !(criteria.after) ||
                  moment(event.modified) > criteria.after;

      var before = !(criteria.before) ||
                   moment(event.modified) < criteria.before;
                  
      var correct_type = !criteria.types ||
                         _.contains(criteria.types, event.type);
                         
      var matching_content = !criteria.content ||
                             event.content.search(criteria.content) !== -1
                         
      return by_user && parent_user && after && before && correct_type && matching_content;
             
    });
  }, function(criteria, history){
    // Memo
    history = history || [];
    criteria = criteria || "";
    return $scope.hash(criteria) +
           $scope.hash(history[0]) +
           history.length +
           $scope.last_history_update; 
  });
  $scope.show_history = function() {
    $scope.n_events_to_show=10;
    $('#history_modal').modal('show'); 
  };
  $scope.hide_history = function() {
    $('#history_modal').modal('hide'); 
  };
  $scope.is_history_showing = function() {
    return $('#history_modal').data('bs.modal') && $('#history_modal').data('bs.modal').isShown;
  };
  $scope.load_history = function() {
    // sort the results
    // make previous work
    // render them nicely
    var history = new Query.get({'tags': ['discussion']}); 
    
    // Tell the ui we are working on it
    $scope.updating_history_from_server = true;
    
    history.$promise.then(function(history) {
      history = _.map(history.items, function(item){
        return $scope.load_item(item);
      });
      
      history = _.sortBy(history, function(item){ return -Date.parse(item.modified); });
      $scope.nest(history);
      $scope.history = history;
      
      // Tell the ui we are done
      $scope.updating_history_from_server = false;
      
      // Record the load time
      $scope.last_history_update = new Date();
    });
  };
  $scope.get_history_to_show = function(n) {
    var history = []
    
    if($scope.history_to_show == 'everyones' && $scope.user_to_show == 'everyone') {
      history = $scope.get_history_for_everyone_else();
    }
    if($scope.history_to_show == 'everyones' && $scope.user_to_show != 'everyone') {
      history = $scope.get_history_for_user($scope.user_to_show);
    }
    if($scope.history_to_show == 'for_me') {
      history = $scope.get_history_for_me();
    }
    if($scope.history_to_show == 'by_me') {
      history = $scope.get_history_by_me();
    }
    
    return history.slice(0, n);
  };
  $scope.show_more_events = function(){
    $scope.n_events_to_show += 10;
  };
  $scope.get_history_for_user = function(user) {
    return _.filter($scope.history, function(e) {
      return e.user === user;
    });
  };
  $scope.get_history_for_everyone_else = function() {
    return _.reject($scope.history, function(e) {
      return e.type === "comment" && e.parent_user === $scope.user ||
             e.type === "vote" && e.parent_user === $scope.user ||
             e.user == $scope.user;
    });
  };
  $scope.get_history_for_me = function() {
    return _.filter($scope.history, function(e) {
      return e.type === "comment" && e.parent_user === $scope.user ||
             e.type === "vote" && e.parent_user === $scope.user;
    });
  };
  $scope.get_history_by_me = function() {
    return _.filter($scope.history, function(e) {
      return e.user === $scope.user;
    });
  };
  $scope.related_to_me = function(event) {
    var is_related =
      event.user === $scope.user ||
      event.type === 'vote' && event.parent_user === $scope.user || 
      event.type === 'comment' && event.parent_user === $scope.user;
    return is_related;
  };
  $scope.new_message_count = _.memoize(function(){
    return $scope.get_history_for_me().length;
  }, function(){
    // don't update more than once every 2 seconds
    return Date.now() / (2 * 1000) | 0
  })
  
  // discussion
  $scope.contribution_rank = function(contribution) {
    // How high should a contribution appear?
    
    var total_value = 0;
    
    // Your own results should always be on top
    if(contribution.user == $scope.user) {
      return 1e6;
    }
    
    // Any downvoted item should be hidden
    // because only teachers can downvote
    if($scope.downvote_count(contribution) > 0){
      return -1;
    }

    // Next order by votes
    total_value += $scope.upvote_count(contribution);
    
    // Oldest is highest in a tie
    if(contribution.modified) {
      total_value += (Date.now() - Date.parse(contribution.modified))/Date.now();
    }

    return total_value;
  };
  $scope.show_discussion = function(problem) {
    problem = problem || $scope.problem; // default to current problem
    problem.show_discussion = true;
  };
  $scope.should_show_discussion = function() {
    var my_attempt = $scope.get_my($scope.problem.attempts);
    return $scope.problem.show_discussion  || 
           (my_attempt && my_attempt.graded);
  };
  $scope.load_local_discussion = function(number) {
    $scope.discussion = $scope.discussions[number];
  };
  $scope.load_discussion = function(number) {
    // Default to the current problem number
    number = typeof number !== 'undefined' ? number : $scope.problem_number;
    
    // load the local discussion
    // (quick, but not fully up-to-date)
    $scope.load_local_discussion(number);
    
    // check the server for the ground truth
    // provided reasonable time has passed since the user last 
    // loaded this problem or last saved a change to it
    // (slow, but correct)
    var seconds_since_last_save = $scope.seconds_apart($scope.now(), $scope.problem.last_save);
    var seconds_since_last_load = $scope.seconds_apart($scope.now(), $scope.problem.last_load);
    if(seconds_since_last_save > 10 && seconds_since_last_load > 1) {
      $scope.update_discussion_from_server(number);
    }
    
  };
  $scope.downvoted_contributions = function() {
    return _.filter($scope.discussion.contributions, function(c) {
      return $scope.contribution_rank(c) < 0;
    });    
  };
  $scope.contributions_to_show = function() {
    return _.filter($scope.discussion.contributions, function(c) {
      return $scope.discussion.show_downvoted_contributions || 
             $scope.contribution_rank(c) >= 0;
    });
  };
  
  // voting
  $scope.my_new_vote = function(direction) {
    return $scope.new_item("vote", {"content":direction});
  };
  $scope.upvote = function(item) {

    var vote = $scope.my_new_vote(item, 'up');
    
    // add remotely
    $scope.save_item(vote);
    
    return vote;
  };
  $scope.downvote = function(item) {
    var vote = $scope.my_new_vote(item, 'down');
    
    // add remotely
    $scope.save_item(vote);
    
    return vote;
  };

  $scope.voting_summary = function(item) {
    item.upvotes = item.upvotes || [];
    item.downvotes = item.downvotes || [];
    var response = "";
    if(item.upvotes.length === 0 && item.downvotes.length === 0) {
      response = "no one has voted on this yet";
    }
    if(item.upvotes.length > 0) {
      response += $scope.pretty_list(_.pluck(item.upvotes, 'user')) + " voted for this.";
    }
    if(item.downvotes.length > 0) {
      response += $scope.pretty_list(_.pluck(item.downvotes, 'user')) + " voted against this.";
    }
    return(response);
  };
  $scope.downvote_count = function(item) {
    item.downvotes = item.downvotes || [];
    return item.downvotes.length;
  };
  $scope.upvote_count = function(item) {
    item.upvotes = item.upvotes || [];
    return item.upvotes.length;
  };
  
  // testing
  $scope.get_section_numbers = _.memoize(function(){
    return _.map($scope.problems, function(p){ return p.section + '.' + p.number; });
  }, function(){ return $scope.test.id; });
  $scope.get_problem_number = _.memoize(function(section, number) {
    var section_numbers = $scope.get_section_numbers();
    return _.indexOf(section_numbers, section + '.' + number);
  }, function(section, number) {
    var test_id = $scope.test ? $scope.test.id : '';
    return section + '.' + number + test_id;
  });
  $scope.get_associated_passage = function(problem_number) {
    // If there are not passages (e.g. math)
    if(!$scope.passages) return undefined;
    
    // Find by matching section
    var section = $scope.problems[problem_number].section;
    return _.find($scope.passages, function(p) {return p.section == section});
  };
  $scope.save_current_position = function(problem_number) {
    // Save the users current position (problem number) 
    // to the server
    if(!$scope.user){ return ; }
    
    var position = $scope.new_item("current_position");
    $scope.save_item(position);
    return position;
  };
  $scope.load_current_position = function(user) {
    var template_item = {
      'type': 'current_position',
      'user': user
    }
    var server_key = $scope.server_id(template_item);
    Item.get({'id': server_key})
        .$promise.then(function(position) {
          position = $scope.load_item(position);
          var test = _.find($scope.tests, function(test){return test.id == position.test;})
          $scope.set_current(test,
                             position.section, 
                             position.number);
        }, function(error){
          $scope.set_current();
        });
  }
  $scope.set_current = function(test, section, number) {
    // Default values
    var problem_number = 0;
    test = typeof test !== 'undefined' ? test : $scope.test;
    section = typeof section !== 'undefined' ? section : 1;
    number = typeof number !== 'undefined' ? number : 1;
    
    // Load the test if needed
    var change_tests = test !== $scope.test
    $scope.test_loaded = $scope.problems.length > 0
    
    if(change_tests || !$scope.test_loaded) {
      $scope.test = test;
      $scope.load_problems(test, function(){
        $scope.set_current(test, section, number);
      });
    } else {
      problem_number = $scope.get_problem_number(section, number);
      $scope.set_current_problem(problem_number);
    }
  };
  $scope.set_current_problem = function(problem_number) {
    
    // Be sure the test is loaded
    $scope.test_loaded = $scope.problems.length > 0
    if(!$scope.test_loaded) { 
      $scope.load_problems($scope.test, function(){
        $scope.set_current_problem($scope.problem_number);
      });
    } else {
      // Then set the current problem within the test
      $scope.problem_number = problem_number;
      $scope.problem = $scope.problems[problem_number];
      $scope.next_problem = $scope.problems[problem_number + 1];
      $scope.load_discussion(problem_number);
      $scope.passage = $scope.get_associated_passage(problem_number); 
      $scope.save_current_position();
    }
  };
  $scope.get_next_problem = function() {
    var i = $scope.problem_number;
    if (i < $scope.problems.length - 1) $scope.set_current_problem(i + 1);
  };
  $scope.get_previous_problem = function() {
    var i = $scope.problem_number;
    if (i > 0) $scope.set_current_problem(i - 1);
  };
  $scope.check = function(problem) {
    problem = problem || $scope.problem; // default to current problem
    var attempt = $scope.get_my(problem.attempts);
    attempt.correct = attempt.choice === problem.answer;
    attempt.wrong = !attempt.correct;
    attempt.graded = true;
    
    // Save too
    $scope.save_item(attempt);
  };
  $scope.check_all = function() {
    _.each($scope.problems, function(problem) {
      $scope.check(problem);
      $scope.show_discussion(problem);
    });
  };
  $scope.get_problem = function(number) {
    return $scope.problems[number];
  };
  $scope.get_problem_summary = function(number) {
    var problem = $scope.problems[number];
    var attempt = $scope.get_my(problem.attempts);

    // Was the problem correct, unanswered, etc.?
    var status = "Not answered";
    if (attempt.choice && !p.graded) {
      status = "Answered, not graded";
    } else if (attempt.graded && attempt.correct) {
      status = "Correct!";
    } else if (attempt.graded && attempt.wrong) {
      status = "Wrong";
    }

    var summary = $scope.test.name + " " + p.section + "." + p.number + " - " + status; // e.g. math 4.2
    return summary;
  };
  $scope.format_problem_id = function(number, section, test_id) {
    return 'problem ' + number + 
           ' section ' + section +
           ' of the ' + test_id + ' test ';

  }
  $scope.problem_id = function(problem, test) {
    // default to current
    problem = problem || $scope.problem;
    test = test || $scope.test;

    return $scope.format_problem_id(problem.number, problem.section, test.id);
  }
  // TODO: get rid of this (replace it with the new problem_id)
  //       it should only affect attempts before February 2015
  $scope.old_problem_id = function(problem_number, test_id) {
    // Default to current problem
    var problem_number = typeof problem_number !== 'undefined' ? problem_number : $scope.problem_number;
    var test_id = typeof test_id !== 'undefined' ? test_id : $scope.test.id;

    //  Globally unique id for a problem
    return test_id + " problem # " + problem_number;
  };
  $scope.show_progress = function() {
    $('#progress_modal').modal('show'); 
  };
  $scope.is_progress_showing = function() {
    return $('#progress_modal').data('bs.modal') && $('#progress_modal').data('bs.modal').isShown;
  };
  $scope.score = function(n_correct) {
    return ($scope.score_conversion[String(n_correct)]);
  };
  $scope.load_problems = function(test, callback) {
    //  Load previous responses
    var attempts;
    if($scope.user) {
      $scope.attempts_loading = true;
      attempts = new Query.get({
        tags: ["attempt", $scope.user, test.id]
      });
    }

    // Load the problems
    $scope.test_loaded = false;
    $http.get(test.source).
      success(function(data) {
        
        // problems
        $scope.problems = data.problems;
        
        // add id's (hack)
        _.each($scope.problems, function(p){ 
          p.id = $scope.problem_id(p, test);
        });
        
        $scope.problems_as_loaded = $scope.deep_clone(data.problems);
        $scope.score_conversion = data.score_conversion;
        $scope.passages = data.passages || [];

        // discussions
        $scope.discussions = _.pluck(data.problems, 'discussion');
        $scope.discussions = _.map($scope.discussions, function(d) {
          return d ? d : {};
        });
        $scope.discussions_as_loaded = $scope.deep_clone($scope.discussions);
        
        // nested
        $scope.nested = $scope.nest_problems($scope.problems);
        
        // add attempts
        if(attempts) {
          attempts.$promise.then(function(attempts) {
            // unpack the attempts
            attempts = _.map(attempts.items, function(a) { 
              return $scope.load_item(a);
            });
            
            // delete any existing attempts
            _.each($scope.problems, function(p) { p.attempts = []; });
            
            // nest them under the parent
            $scope.nest(attempts.concat($scope.problems));
            
            // inform others the load is complete
            delete $scope.attempts_loading;

          });
        }

        callback(data);
        
        $scope.test_loaded = true;
      })
  };
  $scope.get_test_from_id = function(test_id) {
    return _.find($scope.tests, function(t){ return t.id === test_id; });
  };
  
  // utility
  $scope.random = function() {
    // Short and unique
    // e.g. 4234324321
    return Math.round(Math.random() * 1e9)
  };
  $scope.now = function() {
    return new Date().getTime();
  };
  $scope.seconds_apart = function(time_is, time_was) {

    // defaults    
    time_is = time_is || 0;
    time_was = time_was || 0;

    return (time_is - time_was) / 1000;
  };
  $scope.deep_clone = function(object) {
    return (JSON.parse(JSON.stringify(object)));
  };
  $scope.pretty_list = function(list) {
    // human readable list
    // like bob, mark, and john
    if(list.length === 0) { return ''; }
    if(list.length === 1) { 
      // bob
      return list[0];
    }
    if(list.length === 2) { 
      // bob and mark
      return list[0] + ' and ' + list[1];
    }
    if(list.length > 2) { 
      // bob, mark, and john
      return _.initial(list).join(", ") + ', and ' + _.last(list); 
    }
  };
  $scope.pluralize = function(string) { return string + 's'; };

  // refactored
  // TODO: move these up when reliable
  $scope.server_id = function(item) {
    if(item.server_id) { return item.server_id; }
    
    if(item.type == "current_position") {
      return "current position of " + item.user;
    }
    
    return item.type + ' ' + item.id + 
           ' by ' + item.user + 
           ' on ' + item.parent;
  };
  $scope.attempt_count = function(attribute) {
    // Count the number of times correct, wrong, etc. appear in items
    var count = (_.reduce($scope.problems, function(n, item) {
      var attempt = $scope.get_my(item.attempts);
      if(attempt && attempt[attribute]) { return n + 1; }
      return n;
    }, 0));
    return count;
  };
  $scope.get_parent_collection = function(item){
    // For example a comment goes in the 'comments' array

    // Seperate arrays for upvotes and downvotes
    // Hacky!
    if( item.type === 'vote' ) { 
       if( item.content === 'up' ) { return 'upvotes'; }
       if( item.content === 'down' ) { return 'downvotes'; }
       throw "Unrecognized vote content: " + item.content; 
    }
    
    // Usually it will just be a pluralization of the items type
    // for example, a comment will go in the comments array.
    return $scope.pluralize(item.type);
  };
  $scope.remove_children = function(item) {
    _.each(item, function(value, key) {
      if(typeof value === typeof []){
        delete item[key];
      }
    });
  };
  $scope.update_discussion_from_server = function(number) {
    // Default to the current problem number
    number = typeof number !== 'undefined' ? number : $scope.problem_number;

    // Let the api know we are loading
    $scope.updating_discussion_from_server = true;
    
    // Get all the discussion items from the server
    // this will be contributions, comments, and votes
    var discussion_items = new Query.get({
      tags: ["discussion", $scope.old_problem_id(number)]
    });

    // Once all the discussion items are returned
    discussion_items.$promise.then(function(discussion_items){
      
      // Start a empty set of contributions
      // Soon we will swap out the current contributions with this one
      var new_contributions = [];

      // Parse the discussion items
      discussion_items = _.map(discussion_items.items, function(i) {
        return $scope.load_item(i);  
      });
      
      // Remove any existing children
      _.each(discussion_items, function(item) {$scope.remove_children(item)})
      
      // Update the discussion
      $scope.discussions[number].contributions = _.filter(
        $scope.nest(discussion_items), 
        function(parent) {
          return parent.type == 'contribution';
        });

      // Record the time of the last load
      $scope.problems[number].last_load = $scope.now();
      
      // Let the api know we are done
      $scope.updating_discussion_from_server = false; 
      
    });
  };
  $scope.nest_problems = function(problems) {
    /*
    Nest problems by section
    This gives the users a way to navigate through problems.
    
    e.g.
    
      "math": 
      [
          [1, 2, 3],  <- 1st section
          [4, 5, 6]   <- 2nd section
      ]
    */
    return _.reduce(problems, function(nested, problem) {
      var section = problem.section;
      var number = problem.number;
    
      // make sure the section exists
      nested[section] = nested[section] || [];
    
      // add the problem to the section
      nested[section].push(problem);
    
      return nested;
    }, {});
  };
  $scope.nest = function(items) {
    
    // Index by id (for speedy lookup)
    var parents = _.indexBy(items, 'id');

    // Items that don't have parents
    var roots = [];
    _.each(items, function(i) {
      var parent_id = i.parent || i.parent_id;
      var parent = parents[parent_id];
      if(parent_id && parent) {
        // Each child should live in a collection based on its type
        // e.g. a comment should live a in comments list
        var collection = $scope.get_parent_collection(i)
        
        // Be sure the parent has a collection of the child's type
        parent[collection] = parent[collection] || [];
        
        // Add the child to the collection
        parent[collection].push(i);
        
      } else {
        roots.push(i);
      }
    });
    
    return roots;
  }

  // loading
  $scope.bind_local_storage = function() {
    // Local save
    // change the version to force local storage to reload
    // storage.clearAll();

    var version = 'swanky aint swanky enough or is it?';
    storage.bind($scope, 'version', {
      defaultValue: version
    });
    if($scope.version !== version) {
      storage.clearAll();
      storage.bind($scope, 'version', {
        defaultValue: version
      });
    }
    storage.bind($scope, 'test', {
      defaultValue: tests[0]
    });  
    storage.bind($scope, 'problems', {
      defaultValue: []
    });
    storage.bind($scope, 'passages', {
      defaultValue: []
    });
    storage.bind($scope, 'score_conversion', {
      defaultValue: []
    });
    storage.bind($scope, 'problem_number', {
      defaultValue: 0,
      storeName: $scope.user
    });
    storage.bind($scope, 'discussions', {
      defaultValue: []
    });
    storage.bind($scope, 'discussions_as_loaded', {
      defaultValue: []
    });
    storage.bind($scope, 'user', {
      defaultValue: ''
    });
  };
  $scope.initialize = function(user){
    $scope.tests = tests;
    $scope.log_in_message = "";
    $scope._ = _;
    $scope.moment = moment;
    $scope.bind_local_storage();
    $scope.user = user || $scope.user || "";
    $scope.load_current_position($scope.user);
    $scope.load_history();
    $scope.user_to_show = 'everyone';
  };
  $scope.reset = function(user) {
    storage.clearAll();
    $scope.initialize(user);
  };

  // Initialize 
  $scope.initialize();
}]);

/* Show html
 * i.e.  ng-bind-html="choice | trust"
 * 
 * Why?
 * This is the simplist way to display equations.
 * An alternative is to use mathjax.  But mathjax
 * is harder to use and a design goal of this 
 * project is to be EASY to code problems.  Specifically,
 * ameteur teachers should be able to do it.  Later we 
 * will use markdown.
 */
app.filter('trust', function($sce) {
  return function(html) {
    return $sce.trustAsHtml(html);
  };
});

/* Time ago
 * 
 * {{ datetime | ago }} -> 15 minutes ago
 *
 */
app.filter('ago', function() {
  return _.memoize(function(datetime) {
    return moment(datetime).fromNow();
  }, function(datetime){
    // update once a minute
    return datetime + (Date.now() / (60 * 1000) | 0)
  });
});
app.filter('ago_without_suffix', function() {
  return _.memoize(function(datetime) {
    return moment(datetime).fromNow(true);
  }, function(datetime){
    // update once a minute
    return datetime + (Date.now() / (60 * 1000) | 0)  
  });
});


/* Really?
 * Does the user really want to click this?
 *
 * Usage: Add attributes: ng-really-message="Are you sure"? ng-really-click="takeAction()" function
 *
 * [source]: http://stackoverflow.com/a/19930247/431079
 */
app.directive('ngReallyClick', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, item, attrs) {
        item.bind('click', function() {
          var message = attrs.ngReallyMessage;
          if (message && confirm(message)) {
            scope.$apply(attrs.ngReallyClick);
          }
        });
      }
    };
  }
]);

/* Templates
 *
 * To make my code cleaner
 */
var replace = function(tag, template) {
  app.directive(tag, function() {
    return {
      restrict: 'E',
      transclude: true,
      template: template
    };
  });
};
replace('panel', '<div class="panel panel-default" ng-transclude></div>');
replace('panelTitle', '<h3 class="panel-title" ng-transclude></h3>');
replace('questionMark', '<i class="fa fa-question fa-lg"></i>');
replace('page', '<li><a href="javascript:void(0)"><span ng-transclude></span></a></li>');


/* Contribution
 *
 * Contributions left in a discussion.
 */
app.directive('contribution', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'contribution.html',
  };
});


/* Comments
 *
 * Comments left on a contribution.
 */
app.directive('comments', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'comments.html',
  };
});

/* Signature
 *
 * How a problem, etc. is signed
 */
app.directive('signature', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'signature.html',
  };
});

/* History
 *
 * Past discussion, etc.
 */
app.directive('history', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'history.html',
  };
});

/* Login
 *
 * Login, change user...
 */
app.directive('login', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'login.html',
  };
});


/* Discussion
 *
 * Discussion for a single problem
 */
app.directive('discussion', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'discussion.html',
  };
});


/* Problem
 *
 * A single problem
 */
app.directive('problem', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'problem.html',
  };
});


/* Navigation
 *
 * Navigation from one problem to the next
 */
app.directive('navigation', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'navigation.html',
  };
});


/* Test info
 *
 * Info on a test, like progress
 */
app.directive('testinfo', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'testinfo.html',
  };
});


/* Header
 *
 * Test, login, etc.
 */
app.directive('top', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'top.html',
  };
});


/* Bottom
 *
 * Always appears on the bottom of a page
 */
app.directive('bottom', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'bottom.html',
  };
});
