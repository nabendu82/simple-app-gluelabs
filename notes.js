const fs = require('fs');

const newNote = function(title, body){
    const notes = uploadNotes();
    notes.push({ title, body });
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const deleteNote = function(title){
    const notes = uploadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    fs.writeFileSync('notes.json', JSON.stringify(notesToKeep));
}

const listNotes = () => {
    const notes = uploadNotes();
    notes.forEach(note => console.log(note.title));
}

const findNote = title => {
    const notes = uploadNotes();
    const note = notes.find(note => note.title === title);
    debugger;
    if(note){
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note not found');
    }
}

const uploadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

module.exports = { newNote, deleteNote, listNotes, findNote }