const Note = require("../models/Notes.models")


module.exports.apiTest = (req, res) => {
    res.json({message: "It is working"})
}

module.exports.allNotes = (req, res) => {
    Note.find()
        .then(NoteList => res.json(NoteList))
        .catch(err => res.json(err))
}

module.exports.oneNote = (req, res) => { 
    Note.findOne({_id: req.params.id})
        .then(oneNote => res.json(oneNote))
        .catch(err => res.json(err))

}

module.exports.createNote = (req, res) => {
    const newNote = req.body
    Note.create(newNote)
    .then(addedNote => res.json(addedNote))
    .catch(err=>res.status(400).json(err))
}

module.exports.updateNote = (req, res) => {
    Note.findOneAndUpdate(
        {_id: req.params.id}, // criteria
        req.body,// updated info
        {new: true, runValidators: true}// config
    )
    .then(updatedNote => res.json(updatedNote))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteNote = (req, res) => {
    Note.deleteOne({_id: req.params.id})
        .then(message => res.json(message))
        .catch(err => res.json(err))
}