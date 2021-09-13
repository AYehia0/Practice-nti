const fs = require('fs')

// exports to a file using the fs module

// note: this overwrites the file each time.
function exportToFile(fileName, data) {

    // converting to string
    const strData = JSON.stringify(data)

    // overwriting the file
    fs.writeFileSync(fileName, strData)

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
    // assuming that the file contains array of objs
    const data = fs.readFileSync(fileName, {encoding:'utf8'})

    // decoding/parsing
    const dataObj = JSON.parse(data)

    // loop through or do whatever
    return dataObj
}

module.exports = {
    saveToFile: exportToFile,
    getData: getDataFromFile,
    addToFile: appendToFile
}
