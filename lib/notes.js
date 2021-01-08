const fs = require('fs');
const path = require('path');

function createNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    )
};

function editNote(body, noteArray) {
    const index = noteArray.findIndex(note => note.id === body.id);

    // removes old note, inserts revised note
    noteArray.splice(index, 1);
    noteArray.splice(index, 0, body);

    // rewrites db.json with revised note
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    )
}

function findById(id, noteArray) {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}

function deleteNote(result, noteArray) {
    const index = noteArray.indexOf(result);

    noteArray.splice(index, 1);

    fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2))
}

module.exports = {
    createNote,
    editNote,
    findById,
    deleteNote
}