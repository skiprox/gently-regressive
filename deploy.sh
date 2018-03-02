#!/bin/sh
#
# Deploy to gentlyregressive.com
#
echo "Starting build script"
gulp -p
echo "Starting deletion of existing folders"
ssh gentlyregressive@165.227.192.193 "rm -rf /var/www/gentlyregressive.com/html/*"
echo "Starting deploy of new /dist contents"
scp -r dist/* gentlyregressive@165.227.192.193:/var/www/gentlyregressive.com/html/