# This is copied off the net. its using python2 syntax.
# To Create a http server in Python 3.x simply use the command: python -m http.server
# (default port is 8000) To specify a different port, simply append the port number at the end of to command
# Example command: python -m http.server 8001
import SimpleHTTPServer
import SocketServer

PORT = 8080

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print ("serving at port", PORT)
httpd.serve_forever()
