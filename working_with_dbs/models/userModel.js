const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        minlength: 3

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) 
                throw new Error("Invalid Email")
        }
    },
    password: {
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 20,
        required: true,
        validate(value){
            if(value.includes('123')) 
                throw new Error('Invalid Password: contains 123')
        }
    },
    gender: {
        type: String,
        trim: true,
        enum: ['male', 'female']
    },
    age: {
        type: Number,
        validate(value){
            if(value<21) 
                throw new Error('Min age is 21')
        }
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}) 


module.exports = User