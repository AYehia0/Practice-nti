const fileHandler = require('./moduleX')

//    saveToFile: exportToFile,
//    getData: getDataFromFile,
//    addToFile: appendToFile

const fileName = "students.json"

const availableClasses = ['a', 'b', 'c']

const studentData = {
    name: "Mohamed",
    classId: "a",
    subjects: []
}

function getLastId(){

    // the whole data
    const fileData = fileHandler.getData(fileName)

    // last student
    // i hope there is a better way to do this [-1]
    // we don't need to parseInt

    if (fileData.length == 0)
        return 0
    
    return fileData[fileData.length-1].id

}

// adding a student to the file
function addStudent(data) {

    // read from file
    // returns [] if empty
    const fileData = fileHandler.getData(fileName)


    // checking if classId is vaild
    if (!availableClasses.includes(data.classId)) return "Invalid classNo"

    // adding id to the student 
    data.id = getLastId() + 1

    // start counting from 0
    fileHandler.addToFile(fileName, data)
}

// id is unique
// returns the location of the student
function getStudentLocation(id) {

    // reading data 
    const fileData = fileHandler.getData(fileName)

    // i will use forEach again
    fileData.forEach( (item, ind) => {
        if (item.id == id) return ind 
    })

}
// adding subjects to student using their ids
// note : takes subjects as obj : { name:, subGrade: }

function addSubjectsToStudent(id, subjects) {

    //getting all the studetns 
    const students = fileHandler.getData(fileName)

    // getting the student first
    const studentInd = getStudentById(id)

    // appending to the subjects
    students[studentInd].subjects.push(subjects)

}


module.exports = {
    addStudent,
    addSubjectsToStudent
}

// In order
// adding student
// search student
// adding subjects
