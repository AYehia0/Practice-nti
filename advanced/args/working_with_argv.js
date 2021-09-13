const studentMod = require('./student.js')
const yargs = require("yargs")


// add student, add subjects

// the command 
yargs.command({
    command: "add_student",
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
            subjects: []
        }
        // adding 
        studentMod.addStudent(data)
    }
})

yargs.command({
    command: "add_subject",
    describe:"Add subject",
    builder: {
        id: {
            type: Number,
            demandOption: true
        },
        name: {
            type: String,
            demandOption: true
        },
        grade: {
            type: Number,
            demandOption: true
        }
    },
    handler: () => {
        const data = {
            name: yargs.argv.name,
            grade: yargs.argv.grade,
        }

        // adding 
        studentMod.addSubjectsToStudent(yargs.argv.id, data)
    }
}
)

yargs.command({
    command: "get_students",
    describe:"Shows Students' info",
    builder: {
    
        limit: {
            type: Number,
            demandOption: false,
            default: 1
        }

    },
    handler: () => {
        const limit = yargs.argv.limit

        // show students
        // use JSON.stringify to show all the data
        console.log(JSON.stringify(studentMod.showStudents(limit))) 
    }
}
)


// idk what is the point of getting the total grades, but meh
yargs.command({
    command: "get_grades",
    describe:"Get sum of the total grades",

    handler: () => {
        // show students
        // use JSON.stringify to show all the data
        console.log(studentMod.getTotalGrades())
    }
}
)

yargs.command({
    command: "get_student_by_id",
    describe:"Shows Students' info",
    builder: {
    
        id: {
            type: Number,
            demandOption: false,
            default: 1
        }

    },
    handler: () => {
        const id = yargs.argv.id

        // show students
        // use JSON.stringify to show all the data
        console.log(JSON.stringify(studentMod.getStudentById(id))) 
    }
}
)






yargs.argv
