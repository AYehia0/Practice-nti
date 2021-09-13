// object is sent
// note it only works with the title,,, very specific function
function validateTitle(task, allTasks){

    const title = task.title

    allTasks.forEach(t => {
        if (title == t.title) return false 

    })

    return true
    
}


const editNoteById = (noteId, editKey, editVal) => {
    // getting the note's index

    const noteIndex = getNoteIndex(noteId)

    // u can't edit the id, date lol
    // no validation is set, for now
    const notes = readNotesFromWhatever()

    const targetNote = notes[noteIndex]

    // change the . to [  ]
    targetNote.editKey = editVal

    // write back
    writeBack(notes)

}
