const Book = require('../models/bookModel')


// add book : POST : takes all 
const addBook = async (req, res, err) => {

    try{
        // data to be inserted
        const newBook = new Book(req.body)
        const saveBook = await newBook.save()

        if (!saveBook)
            res.send('Error')

        res.send(`A book has been added: ${newBook}`)

    }catch(e) {
        res.send(e.message)
    }

}

// edit a book
const editBook = async (req, res, err) => {

    // validation on the edit
    const allowedFields = ['name', 'author', 'pages', 'category']

    const sentFields = Object.keys(req.body)

    isValid = sentFields.every( field => allowedFields.includes(field) )
    if(!isValid) 
        res.send("Can't edit")

    try{

        const data = await Book.findByIdAndUpdate(req.params.id, req.body)
        if (!data)
            res.send('Book not found')

        res.send(`A book has been edited: ${data}`)

    }catch(e) {
        res.send(e.message)
    }

}

// delete a book
const deleteBook = async (req, res, err) => {

    try{
        const data = await Book.findByIdAndDelete(req.params.id)
        if (!data)
            res.send('Book not found')

        res.send(`A book has been deleted: ${data}`)

    }catch(e) {
        res.send(e.message)
    }

}

// get a book by id
const getBook = async (req, res, err) => {

    try{
        const data = await Book.findById(req.params.id)
        if (!data)
            res.send('Book not found')

        res.send(`A book has been found: ${data}`)

    }catch(e) {
        res.send(e.message)
    }

}

//  
const getBooks = async (req, res, err) => {

    try{
        const data = await Book.find()
        if (!data)
            res.send('No books in the db')

        if (data.length == 0)
            res.send('No books')

        res.send(`Books: ${data}`)

    }catch(e) {
        res.send(e.message)
    }
}



// the callbacks goes here
module.exports = {
    addBook,
    editBook,
    deleteBook,
    getBook,
    getBooks
}