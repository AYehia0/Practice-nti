const fs = require('fs')


// exports to a file using the fs module 
// note: this overwrites the file each time.
function exportToFile(fileName, data) {

    // converting to string
    const strData = JSON.stringify(data)

    // overwriting the file
    fs.writeFileSync(fileName, strData)

}

function findUserIndex(users, id) {

    const searchTerm = "account_num"

    const ind = users.findIndex(user => user[searchTerm] == id)

    return ind
}

function deleteUser(fileName, id) {

    const allData = getDataFromFile(fileName)

    // getting the index 
    const ind = findUserIndex(allData, id)

    // deleting
    allData.splice(ind, 1)

    // saving
    exportToFile(fileName, allData)

}

// returns a user by their ids
function getUserById(fileName, id, searchTerm) {

    const allData = getDataFromFile(fileName)

    const user = allData.find(el => {
        return el[searchTerm] == id
    })

    return user

}

function appendToFile(fileName, data) {

    // reading the file
    const allData = getDataFromFile(fileName)

    allData.push(data)

    // write back
    exportToFile(fileName, allData)
}

function getDataFromFile(fileName){

    // reading from file
    // encoding utf-8 , just in case
    const data = fs.readFileSync(fileName, {encoding:'utf8'})

    // decoding/parsing
    const dataObj = JSON.parse(data)

    // loop through or do whatever
    return dataObj
}

function toggleStatus(fileName, id){
    
    const allData = getDataFromFile(fileName)

    const ind = findUserIndex(allData, id) 

    // there is a better way to do this, idk 

    allData[ind].status = true

    // saving 
    exportToFile(fileName, allData)

}

// editing a user 
function editUserByAccountNum (fileName, id, data) {
    
    const allData = getDataFromFile(fileName)

    const ind = findUserIndex(allData, id) 

    // there is a better way to do this, idk 

    allData[ind].name = data.name
    allData[ind].balance = data.balance

    // saving 
    exportToFile(fileName, allData)

}

function updateMoneyAmount(fileName, id, money, op) {

    const allData = getDataFromFile(fileName)

    const ind = findUserIndex(allData, id) 

    console.log(ind, allData[ind])

    if (op == "+") {
        allData[ind].balance += (+money.money)
    }

    if (op == "-"){
        // checking the current balance
        // need to check if number is negative 
        // more error checking here

        // converting strings to numbers using + 
       if (+money.money <= +money.balance){
            allData[ind].balance -= (+money.money)
        }

        // if process failed 
    }

    // saving 
    exportToFile(fileName, allData)

}


module.exports = {
    saveToFile: exportToFile,
    getData: getDataFromFile,
    addToFile: appendToFile,
    getUserById,
    deleteUser,
    findUserIndex,
    editUserByAccountNum,
    toggleStatus,
    updateMoneyAmount
}
