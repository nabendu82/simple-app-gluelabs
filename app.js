const validator = require('validator');

const writeAndappend = require('./server.js');
writeAndappend();

console.log(validator.isEmail('nabendu@gmail.com'));
console.log(validator.isEmail('nabendu@gmail'));

console.log(process.argv);