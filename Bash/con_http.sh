#!/bin/bash

# This script is from xmodulo.com/tcp-udp-socket-bash-shell.html
# It creates a new tcp connection with fd of 3 to raspy2b's port 80.
# Then it writes the proper http headers 'String' to fd 3.
# And finally, it cat's the response from the server.

exec 3<>/dev/tcp/172.217.4.174/80
echo -e "GET / HTTP/1.1\r\nhost: www.google.com\r\nConnection: close\r\n\r\n" >&3
cat <&3
