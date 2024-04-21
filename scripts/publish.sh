yarn
rm -rf dist
yarn build
node scripts/deployment-package-json.js "${VERSION:-null}"
cd dist
npm publish --access public
