require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT || 8080

// listening to the port 
app.listen(PORT, () => console.log(`Listening on port : ${PORT}`))