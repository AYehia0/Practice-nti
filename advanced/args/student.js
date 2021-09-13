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

    let index = 0

    // reading data 
    const fileData = fileHandler.getData(fileName)

    // i will use forEach again
    fileData.forEach( (item, ind) => {
        if (item.id == id){
            index = ind
            return 
        }     
    })

    return index

}
// adding subjects to student using their ids
// note : takes subjects as obj : { name:, subGrade: }

function addSubjectsToStudent(id, subjects) {

    //getting all the studetns 
    const students = fileHandler.getData(fileName)

    // getting the student first
    const studentInd = getStudentLocation(id)

    // appending to the subjects
    students[studentInd].subjects.push(subjects)

    // save back
    fileHandler.saveToFile(fileName, students)

}

// gets first X student 
function showStudents(limit) {

    const students = fileHandler.getData(fileName)

    if (students.length <= limit) return students

    return students.slice(students.length-limit)

}

function getTotalGrades() {


    let sum = 0
    const students = fileHandler.getData(fileName)

    
    students.forEach(student => {
        student.subjects.forEach(sub => {
            sum += sub.grade
        })
    })

    return sum

   // return students.reduce((count, {subjects}) => {

   //     console.log(subjects)

   //     count + subjects.grade

   //     console.log(subjects.grade)

   // }, 0)

}

// return the student by id
function getStudentById (id){

    let choosenStudent = undefined
    const students = fileHandler.getData(fileName)

    student.forEach(s => {
        if (s.id == id) {
            choosenStudent = s
            return
        }
    })

    return choosenStudent

} 

module.exports = {
    addStudent,
    addSubjectsToStudent,
    getStudentLocation,
    showStudents,
    getTotalGrades,
    getStudentById
}

// In order
// adding student
// search student
// adding subjects
