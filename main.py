import webapp2

class MainHandler(webapp2.RequestHandler):

    def get(self):
        self.response.write("""
            <html>
                <body>
                    <a href="_ah/api/explorer">explore the api</a><br>
                    <a href="static/index.html">visit home</a><br>
                    <a href="https://appengine.google.com/dashboard?&app_id=s~haley-academy">dashboard</a><br>
                </body>
            </html>""")


app = webapp2.WSGIApplication([('/', MainHandler)], debug=True)