
// Read and write files synchronously

// Method 1: Use the fs module
// const fs = require('fs')

// const first = fs.readFileSync('/mnt/d/Cloud/OneDrive/Learning/nodejs/fcc/tutorial/content/first.txt','utf8')
// const second = fs.readFileSync('/mnt/d/Cloud/OneDrive/Learning/nodejs/fcc/tutorial/content/second.txt','utf8')

// Method 2: Declare the readFileSync and writeFileSync methods directly from the fs module

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next task')