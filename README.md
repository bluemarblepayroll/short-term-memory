# Short Term Memory

**Isomorphic Session Storage**

[![npm version](https://badge.fury.io/js/%40bluemarblepayroll%2Fshort-term-memory.svg)](https://badge.fury.io/js/%40bluemarblepayroll%2Fshort-term-memory) [![Build Status](https://travis-ci.org/bluemarblepayroll/short-term-memory.svg?branch=master)](https://travis-ci.org/bluemarblepayroll/short-term-memory) [![Maintainability](https://api.codeclimate.com/v1/badges/33a241c612913e69742d/maintainability)](https://codeclimate.com/github/bluemarblepayroll/short-term-memory/maintainability) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Very small library that places a layer of abstraction over the browsers built in [Session Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).  This means you can program to this library and it will ensure you do not make any hard links between your application and the browser.  When this is ran outside of a browser then it will polyfill the storage with an in-memory key-value store.

Note that this library only deals with short-lived storage (Session Storage) and does not currently deal with longer term storage (i.e. Local Storage).

## Installation

This library could be consumed as either a pure TypeScript library or as its trans-compiled ES2015 JavaScript counterpart.

To install through NPM:

````
npm install --save @bluemarblepayroll/short-term-memory
````

To install through Yarn:

````
yarn add @bluemarblepayroll/short-term-memory
````

## Examples

The Store API is meant to implement the main SessionStorage API methods:

1. getItem
2. setItem
3. removeItem
4. clear

The other methods, such as key and length, were purposely omitted from the initial implementation.  These methods can be added later should the need arise.

### Storing & Retrieving Values

```
import StorageManager from "@bluemarblepayroll/short-term-memory";

StorageManager.setItem('Iron Man', 'Tony Stark');

let ironMansName = StorageManager.getItem('Iron Man'); // returns 'Tony Stark'
```

### Removing Values

```
import StorageManager from "@bluemarblepayroll/short-term-memory";

StorageManager.setItem('Iron Man', 'Tony Stark');

StorageManager.removeItem('Iron Man');

let ironMansName = StorageManager.getItem('Iron Man'); // returns null
```

### Clearing

```
import StorageManager from "@bluemarblepayroll/short-term-memory";

StorageManager.setItem('Iron Man', 'Tony Stark');
StorageManager.setItem('Hulk', 'Bruce Banner');

StorageManager.clear();

let ironMansName = StorageManager.getItem('Iron Man'); // returns null
let hulksName = StorageManager.getItem('Hulk'); // returns null
```

## Contributing

### Development Environment Configuration

Basic steps to take to get this repository compiling:

1. Install [Node.js](https://nodejs.org) (check package.json for versions supported.)
2. Install Yarn package manager: ```npm install -g yarn```
3. Clone the repository: ```git clone git@github.com:bluemarblepayroll/short-term-memory.git```
4. Navigate to the root folder: ```cd short-term-memory```
5. Install dependencies: ```yarn```

### Compiling

To compile the TypeScript source down to native JavaScript, run:

````
yarn run build
````

### Running Tests

To execute the test suite run:

````
yarn run test
````

### Linting

````
yarn run lint
````

### Publishing

Note: ensure you have proper authorization before trying to publish new versions.

After code changes have successfully gone through the Pull Request review process then the following steps should be followed for publishing new versions:

1. Merge Pull Request into master
2. Update package.json [version number](https://semver.org/)
3. Update CHANGELOG.md
4. Push master to remote and ensure CI builds master successfully
5. Build the project locally: `yarn run build`
6. Perform a dry run: `npm publish --access public --dry-run`.  Inspect packaging, ensure all files (including dist) are included.
7. Publish package to NPM: `npm publish --access public`
8. Tag master with new version: `git tag <version>`
9. Push tags remotely: `git push origin --tags`

## License

This project is MIT Licensed.
