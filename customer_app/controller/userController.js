// instead of duplicating the code in the routes
// it's a good idea to create the callbacks here

// edit
// add
// showSingle
// showAll
require('dotenv').config()
const express = require('express')
const router = express.Router({ mergeParams: true })
const fileHandler = require('../moduleX')

const fileName = process.env.fileName


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
    
    const id = req.body.account_num

    // toggling the user's status 
    fileHandler.toggleStatus(fileName, id)

    // returning to the same page
    res.redirect('back')
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

    const id = req.params.id

    // getting the user to be edited 
    const user = fileHandler.getUserById(fileName, id, "account_num")

    res.render('edit', {
        user: user
    })
}

const editRoutePost = (req, res, err) => {

    // getting the data 
    const userData = req.body
    const id = req.params.id

    fileHandler.editUserByAccountNum(fileName, id, userData)
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

// showall route
const showAllRouteGet = (req, res, err) => {

    // gettingg all the users from the json file
    const customers = fileHandler.getData(fileName)

    res.render('showAll', {
        customers: customers
    })
}

// showSingle route
const showSingleRouteGet = (req, res, err) => {

    const userId = req.params.id

    // searching for a user
    const user = fileHandler.getUserById(fileName, userId, "account_num")

    res.render('showSingle', {
        customer: user
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