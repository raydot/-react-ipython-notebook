#!/bin/bash

output=$(./node_modules/.bin/standard src/*.js src/**/*.js test/*.js test/**/*.js) || (
  echo "$output";
  notif=`echo $output |grep '\/.*:[0-9]*:[0-9]*:' |sed -E -e "s/.*\/([^\/]*\/[^\/]*):([0-9]*):[0-9]*:/\1:\2/g"`;
  osascript -e 'on run argv' -e 'display notification (item 1 of argv) with title "StandardJS"' -e 'end run' "$notif" 1&>/dev/null;
)
