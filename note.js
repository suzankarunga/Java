 console.log('Hello world');
 console.log('Global');


const os = require('os');
const  path =require('path')
const  math = require ('./math')
//console.log(os.type());
//console.log(os.homedir());
//console.log(os.version());

//console.log(__dirname)
//console.log(__filename) 
console.log(path.parse(__filename));
console.log(math.add(2,3));
const { add ,subtract,multiply,divide } = require('./math')

console.log(math.subtract(2,4))
console.log(math.divide(2,4))
console.log(math.multiply(2,4))
console.log(math.add(2,4))

