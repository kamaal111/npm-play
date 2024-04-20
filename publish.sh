yarn
rm -rf dist
yarn build
node scripts/deployment-package-json.js
cd dist
npm publish --access public
