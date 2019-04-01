// console.log('Starting notes.js');
const fs = require('fs');

const fetchNotes = ()=>{
    try{
        var stringNote = fs.readFileSync('notes-data.json');
        return JSON.parse(stringNote);
    }catch(error){
        return [];
    }
}

const saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title, body)=>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicate = notes.filter((note)=>note.title===title);
    if(duplicate.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    // console.log(`Adding note name ${title}  ${body}`)
}

var getAll = ()=>{
    return fetchNotes()
    // console.log('Getting All Note')
}

var getNote = (title)=>{
    // console.log(`Getting Your node name ${title}`);
    var notes = fetchNotes();
    filter = notes.filter((note)=>note.title===title);
    return filter[0];
}

var removeNote = (title)=>{
    var notes = fetchNotes();//fetching notes
    //filtering the note which have different title which is given
    filterednotes = notes.filter((note)=>note.title!==title); 
    //again saving the note array
    saveNotes(filterednotes);
    return notes.length!==filterednotes.length
    // console.log(`Removing note ${title}`)
}

var logNote = (note)=>{
    console.log("------------");
    console.log('Title: ', note.title);
    console.log('Body: ', note.body);
}

module.exports ={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}