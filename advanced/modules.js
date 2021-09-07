const fs = require('fs')


// exports to a file using the fs module

// note: this overwrites the file each time.
function exportToFile(fileName, data) {

    // converting to string
    const strData = JSON.stringify(data)

    // overwriting the file
    fs.writeFileSync(fileName, strData)

}


module.exports = {
    saveToFile: exportToFile
}
