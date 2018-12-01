# Short Term Memory

**Isomorphic Session Storage**

[![Build Status](https://travis-ci.org/bluemarblepayroll/short-term-memory.svg?branch=master)](https://travis-ci.org/bluemarblepayroll/short-term-memory)





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
