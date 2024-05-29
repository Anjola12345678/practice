/*const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
       res.end('WELCOME TO OUR HOME PAGE...')
       //res.end('my name is akintunde michael')
    }
   if(req.url === 'about'){
    res.end('here is our short history')
   }
   res.end(`
    <h1>Oops! : "AKINTUNDE MICHAEL THIS PAGE CANNOT BE REACHED..."<h1>
   <p><b>we cant seem to find the page you are looking for<b></p>
   <a href="/">BACK HOME</a>
   `)
})

server.listen(5000)*/


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log(newItems)