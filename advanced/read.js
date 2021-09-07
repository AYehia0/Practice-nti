const fileReaders = require('./moduleX')




const data = [
    {name: "Something", age:23},
    {name: "Something", age:23},
    {name: "Something", age:23},
    {name: "Something", age:23}
] 


data.forEach(item => {
    // writing to a file

    fileReaders.addToFile('test.json', item)
})


