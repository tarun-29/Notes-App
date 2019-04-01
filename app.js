// console.log('Note App Started');

const notes = require('./notes')
const fs = require('fs');
const _ = require('loadsh');
const os = require('os');
const yargs = require('yargs');

const titleOptions = {
        describe: 'Title of Note',
        demand: true,
        alias: 't'
}

const bodyOptions ={
    describe: "Body Of note",
    command: true,
    alias: 'b'
}

const argv = yargs
    .command('add','Add A new Note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list',"List all Note")
    .command('read',"Read a Note",{
        title: titleOptions
    })
    .command('remove', 'Remove a note',{
        title: titleOptions
    })
    .help()
    .argv
const command = argv._[0];
// console.log('Command: ',command);
// // console.log('Process', process.argv);
// console.log('Yargs',argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body)
    if(note){
        console.log("Note Created");
        notes.logNote(note);
    }
    else{
        console.log("The Title already Exist")
    }
}
else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note)=>notes.logNote(note))
}
else if(command === 'read'){
    var noteget = notes.getNote(argv.title);
    // console.log(noteget)
    if(noteget){
        console.log("Note Found");
        notes.logNote(noteget);
    }
    else{
        console.log("Note Not Found");
    }
}
else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not Found"
    console.log(message);
}
else{
    console.log('Command Not Recongnized')
}

// console.log(argv)