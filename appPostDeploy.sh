#!/usr/bin/env bash
# from https://mostlygibberish.slack.com/services/BBUDATXDJ#service_setup

echo "POST DEPLOY TRIGGERED"

MESSAGE=$(cat <<EOF
\n <https://yoururl.com|Some Domain> \n or <https://www.someotherdomain.com|Somewhere Else>
EOF
)
#You could do something like a slack webhook here, like
#curl -X POST --data-urlencode "payload={\"channel\": \"#general\", \"username\": \"Code Genie\", \"text\": \"A new version of the website has been deployed. $MESSAGE.\", \"icon_emoji\": \":tada:\"}" https://hooks.slack.com/services/###YOUR SLACK URL