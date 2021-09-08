const fileHandler = require('./moduleX')

//    saveToFile: exportToFile,
//    getData: getDataFromFile,
//    addToFile: appendToFile

const fileName = "students.json"

const availableClasses = ['a', 'b', 'c']

const studentData = {
    name: "Mohamed",
    classId, 'a',
    subjects: []
}


// adding a student to the file
function addStudent(data) {

    // read from file
    // returns [] if empty
    const fileData = getData(fileName)

    // getting the length of the object
    const numOfStudents = fileData.length

    // checking if classId is vaild
    if (availableClasses.includes(data.classId)) return "Invalid classNo"

    // adding id to the student 
    data.id = numOfStudents + 1

    // start counting from 0
    addToFile(fileName, data)
}


// id is unique
// returns the location of the student
function getStudentLocation(id) {

    // reading data 
    const fileData = getData(fileName)

    // i will use forEach again
    fileData.forEach( (item, ind) => {
        if (item.id == id) return ind 
    })

}
// adding subjects to student using their ids
// note : takes subjects as obj : { name:, subGrade: }

function addSubjectsToStudent(id, subjects) {

    //getting all the studetns 
    const students = getData(fileName)

    // getting the student first
    const studentInd = getStudentById(id)

    // appending to the subjects
    students[studentInd].subjects.push(subjects)

}


// In order
// adding student
// search student
// adding subjects
