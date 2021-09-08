const studentMod = require('./student.js')
const yargs = require("yargs")


// add student, add subjects

// the command 
yargs.command({
    command: "add",
    describe:"Add student",
    builder: {
        name: {
            type: String,
            demandOption: true

        },
        classno: {
            type: String,
            demandOption: true
        }
    },
    handler: () => {
        const data = {
            name: yargs.argv.name,
            classId: yargs.argv.classno,
        }

        // adding 
        studentMod.addStudent(data)

    }
})

yargs.argv
