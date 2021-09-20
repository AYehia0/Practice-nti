// instead of duplicating the code in the routes
// it's a good idea to create the callbacks here
// edit
// add
// showSingle
// showAll
require('dotenv').config()
const express = require('express')
const router = express.Router({ mergeParams: true })
const conn = require('../models/dbModel')
const ObjectId = require('mongodb').ObjectId

const mainRouteGet = (req, res, err) => {
    res.send('Main Page')
}

// all the routes
const activateRoutePost = (req, res, err) => {
    // activate user no validation: BAD things will happen here
    
    const id = req.body.account_num

    // toggling the user's status 
    fileHandler.toggleStatus(fileName, id)

    // returning to the same page
    res.redirect('back')
}

const addRoutePost = (req, res, err) => {
    // activate user no validation: BAD things will happen here
    
    const userData = req.body

    // adding to db
    conn((err, db) => {

        if (err) res.send(err)

        db.collection('User').insertOne(userData, (error, result) => {
            if (error) res.send(error)

            // return 
            res.redirect('/show-all')
        })

    })

}

// showall route
const showAllRouteGet = (req, res, err) => {


    // getting users from db
    conn((err, db) => {
        if (err) res.send(err)

        // getting all the users
        db.collection('User').find().toArray( (error, result) => {

            if (error) res.send(error)

            console.log(result)
            res.render('showAll', {
                customers: result 
            })

        })    
    })

}


const addRouteGet = (req, res, err) => {
    res.render('add')
}

// balance adding 
const balanceAddRoutePost = (req, res, err) => {
    const userData = req.body

    const id = userData.account_num
    const amount = {
        money: userData.money,
        balance:userData.balance
    }


    fileHandler.updateMoneyAmount(fileName, id, amount, "+")

    // doing processes on the data, whatever
    res.redirect('back')
}

// edit 
const editRouteGet = (req, res, err) => {

    const userId = req.params.id

    // searching for a user in the db
    conn((err, db) => {
        if (err) res.send(err)

        db.collection('User').findOne({_id: new ObjectId(userId)}, (error, data) => {
            if (error) res.send(error)

            // checking if there is not user

            // rendering
            res.render('edit', {
                user: data 
            })

        })
    })

}

const editRoutePost = (req, res, err) => {

    // getting the data 
    const userData = req.body
    const userId = req.params.id

    // find and update in the db
    conn((err, db) => {
        if (err) res.send(err)

        db.collection('User').findOneAndUpdate({_id: new ObjectId(userId)}, {$set: {
            name: userData.name,
            balance: userData.balance
        }}) 

    })
    // saving 
    // redirecting
    res.redirect('/show-all')

}

// search route
const searchRouteGet = (req, res, err) => {
    res.render('search')
}

const searchRoutePost = (req, res, err) => {

    // getting the data 
    const id = req.body.account_num

    // adding id to the user
    const user = fileHandler.getUserById(fileName, id, "account_num")

    // if user exists
    if (user) {
        // i tried to redirect t00 
        res.render('search', {user})
    }else {
        res.render('search')
    }

    // saving 
    // redirecting
    //res.redirect('/show-all')

}
// showSingle route
const showSingleRouteGet = (req, res, err) => {

    const userId = req.params.id

    // searching for a user in the db
    conn((err, db) => {
        if (err) res.send(err)

        db.collection('User').findOne({_id: new ObjectId(userId)}, (error, data) => {
            if (error) res.send(error)

            // checking if there is not user

            // rendering
            console.log(data)
            res.render('showSingle', {
                customer: data 
            })
        })
    })

}

// withdraw route
const withdrawRoutePost = (req, res, err) => {
    const userData = req.body

    const id = userData.account_num

    const amount = {
        money: userData.money,
        balance: userData.balance
    }

    fileHandler.updateMoneyAmount(fileName, id, amount, "-")

    res.redirect('back')
}


module.exports = {
    mainRouteGet,
    activateRoutePost,
    addRoutePost,
    addRouteGet,
    balanceAddRoutePost,
    editRouteGet,
    editRoutePost,
    searchRouteGet,
    searchRoutePost,
    showAllRouteGet,
    showSingleRouteGet,
    withdrawRoutePost
}
