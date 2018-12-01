#1/bin/bash

# This script is from xmodulo.com/tcp-udp-socket-bash-shell.html.
#
# This script retrieves the version information of a remote SSH server.

exec 3</dev/tcp/192.168.77.1/22
echo "GET / OPENSSH/4.3.1\r\nhost: ORIGIN\r\nConnection: close\r\n\r\n" >&3
timeout 5 cat <&3;

