const router = require('express').Router();
const { notes } = require('../../Develop/db/db.json')
const { v4: uuidv4 } = require('uuid');
const { createContext } = require('vm');
const { createNote, editNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    console.log(notes)
    res.json(notes)
});

router.post('/notes', (req, res) => {
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }
})

module.exports = router;