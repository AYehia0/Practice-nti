const fileReaders = require('./moduleX')


const data = fileReaders.getData('test.json')


data.forEach(item => {
    console.log(item)
})


