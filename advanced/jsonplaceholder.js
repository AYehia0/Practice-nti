// get the node-fetch
const fetch = require('node-fetch')

// getting the posts from a remote api
const api_url = 'https://jsonplaceholder.typicode.com/posts'


// using the fetch on the browser not the one in the node : require("node-fetch")

const getDataFromAPI = async (url, dataCallBack) => {

    const res = await fetch(url) 
    const data = await res.json()

    dataCallBack(data)
}


getDataFromAPI(api_url, (data) => {
    console.log(data)
})
