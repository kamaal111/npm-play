const fs = require('fs/promises');

const PACKAGE_JSON_FILENAME = 'package.json';

async function main() {
  const packageJSON = await readJSON(PACKAGE_JSON_FILENAME);
  const modifiedPackageJSON = modifyPackageJSON(packageJSON);
  await fs.writeFile(
    `dist/${PACKAGE_JSON_FILENAME}`,
    JSON.stringify(modifiedPackageJSON, null, 2)
  );
}

function modifyPackageJSON(packageJSON) {
  const argumentVersion = process.argv[2];
  const version =
    argumentVersion && argumentVersion !== 'null'
      ? argumentVersion
      : packageJSON.version;
  return {
    ...packageJSON,
    main: 'index.js',
    typings: 'index.d.ts',
    version,
  };
}

async function readJSON(path) {
  const buffer = await fs.readFile(path);
  const string = buffer.toString();
  return JSON.parse(string);
}

main();
