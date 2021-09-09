const https = require("https")


const API_URL = "https://jsonplaceholder.typicode.com/comments?postId=1"


// https.request(url, options, callback)
// options contains : port, host, path, method ,,,,
req = https.request(API_URL, (res) => {
    let resTemp = ""

    // checking the res
    console.log(res.statusCode)

    // utf-8 encoding
    res.setEncoding('utf8')

    // receving data
    res.on('data', data => {
        resTemp += data.toString()
    })

    // on finish
    res.on('end', () => {
        console.log(resTemp)
    })
})


// checking for errors 
req.on('error', (err) => {
    console.error(err.message)
})

// closing the socket
req.end()
