// npm is a global command that comes installed with nodejs. It's the node package manager
// package, module, and dependency essentially are the same thing
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it only in any project
// npm install -g <packageName>

// package.json - manifest file that stores important info about project/ package
// 3 ways to create:
// 1. create package.json in the root
// 2. npm init (step by step)
// 3. npm init -y (everything default)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)