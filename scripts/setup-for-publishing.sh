rm -f .npmrc
touch .npmrc
echo _auth=$NPM_TOKEN >> .npmrc
echo always-auth=true >> .npmrc
