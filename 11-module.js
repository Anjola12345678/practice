const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'UTF-8');
const second = readFileSync('./content/second.txt', 'UTF-8');
//this will print out the first and second statement...
//console.log(first, second)


writeFileSync('./content/result-sync.txt',
 `here is the result : ${first}, ${second}`, {flag: 'a'})
 console.log('done with this task')
 console.log('starting the next one')