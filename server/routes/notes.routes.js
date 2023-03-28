const NoteController = require("../controllers/notes.controllers")

module.exports = (app) => {
    app.get("/api/testing", NoteController.apiTest)
    app.get("/api/notes", NoteController.allNotes)
    app.get("/api/notes/:id", NoteController.oneNote)
    app.post("/api/notes/new", NoteController.createNote)
    app.put("/api/notes/update/:id", NoteController.updateNote)
    app.delete("/api/notes/:id", NoteController.deleteNote)
}
