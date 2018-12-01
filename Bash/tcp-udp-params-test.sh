#!/bin/bash

if [ "$1" != "" ]; then
    ip=$1
    port=$2
    protocolType=$3
    addrMain="HTTP/1.1\r\nhost: http://$ip:$port\r\nConnection: close"

    if [ "$4" == "" ]; then
        exec 3<>/dev/$protocolType/$ip/$port
        echo -e "GET / $addrMain\r\n\r\n" >&3
        cat <&3
	break;
    elif [ "$4" == "post" ]; then
        exec 3<>/dev/$protocolType/$ip/$port
	echo -e "POST / $addrMain\r\ndata: get_version\r\n\r\n" >&3
	cat <&3
	break;
    elif [ "$4" == "origin" ]; then
        exec 3<>/dev/$protocolType/$ip/$port
	echo -e "GET / $addrMain\r\nOrigin: http://192.168.77.1\r\n\r\n" >&3
	cat <&3
	break;
    else
	echo "Error Occured"
    fi
else
    echo "Parameters Required!";
    echo "";
    echo "Example:";
    echo "    [me@linuxmachine]$ ./tcp-udp-param-test.sh 192.168.1.24 3636 tcp";
fi
