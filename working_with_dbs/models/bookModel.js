const mongoose = require('mongoose')
const validator = require('validator')


// the collection name 
const colName = 'Book'

// the schema
const bookSchema = {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        lowercase: true,
        trim: true,
        enum: ['web', 'mobile', 'desktop']
    },
    pages: {
        type: Number,
        minlength: 500
    }

}

const Book = mongoose.model(colName, bookSchema)

// exporting 
module.exports = Book