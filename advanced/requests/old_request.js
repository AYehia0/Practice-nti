const requests = require('request')

requests({url: "https://jsonplaceholder.typicode.com/users", method:'GET', json:true}, (err, res) => {
    console.log(res.body)
})




