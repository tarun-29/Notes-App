// var obj = {
//     name: 'Tarun Kantiwal',
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));

// console.log(stringObj);

// var personString = '{"name": "Tarun Kantiwal", "age": 20}';

// var obj = JSON.parse(personString);
// console.log(typeof(obj));
// console.log(obj);

const fs = require('fs');

var originalNote = {
    titls: 'Some Title',
    body: 'Some Body'
}

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

var noteString = fs.readFileSync('notes.json');
var note  = JSON.parse(noteString)
console.log(typeof(note))
console.log(note);