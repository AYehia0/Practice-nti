

const editNoteById = (noteId, editKey, editVal) => {
    // getting the note's index

    const noteIndex = getNoteIndex(noteId)

    // u can't edit the id lol
    const notes = readNotesFromWhatever()

    const targetNote = notes[noteIndex]

    // change the . to [  ]
    targetNote.editKey = editVal

    // write back
    writeBack(notes)

}
