const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//to get the last word which is called base name...
const base = path.basename(filePath)
console.log(base) 


//the dirname is used to get the location of the file...
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)