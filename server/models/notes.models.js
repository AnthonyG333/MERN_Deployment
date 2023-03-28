const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Note title is required."],
        minlength: [3, "title must be at least 3 characters."]
    },

    body: {
        type: String,
        required: [true, "Body is required."],
        maxlength: [255, "Body can be no longer than 255 chracters."]
    },

}, {timestamps: true})

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;