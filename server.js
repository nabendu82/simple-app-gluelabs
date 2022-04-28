const fs = require('fs');

const writeAppend = function() {
    console.log('Writing and appending to a file');
    fs.writeFileSync('notes.txt', 'This file was created by Node.js and using File System');
    fs.appendFileSync('notes.txt', '\nThis is the second line and created with Node.js');
}

module.exports = writeAppend;