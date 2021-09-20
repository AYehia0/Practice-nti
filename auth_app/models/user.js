require('./db')
require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// user model
/*
    Each user has :
        - name: String, 
        - email: String, required, unique, validation: email 
        - phone: String, required, unique, validation: Egypt phone number
        - password: String, required, validation: 6min, 20max, more
        - addresses: String, more than one address []
        - age: Number, required, validation: greater than 20 
        - image: String, path,, check how to store images in mongodb
        - status: Boolean

*/

// validation : https://mongoosejs.com/docs/validation.html#custom-validators 

// creating the schema
const userSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)) 
                throw new Error('Invalid Email')
        }
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if(!validator.isMobilePhone(value, ['ar-EG']))
                throw new Error('Invalid Phone')
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isStrongPassword(value, {minLength: 6, minLowercase: 1, minUppercase: 1}))
                throw new Error("Password isn't strong enough")
        }
 
    },
    address: [{
        type:{
            type: String,
            trim: true,
            default: "city"
        },
        data: {
            type: String,
            trim: true,
        }
    }],
    age: {
        type: Number,
        validate(value) {
            if (value < 21) 
                throw new Error("Age must be greater than 20")
        } 
    },
    image:{
        type:String,
        trim:true
    }, 
    status:{
        type:Boolean,
        default: false
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
}, 
// timestamps: logging the time the object created at, updated at
{
    timestamps:true, 
    toJSON:{
        transform(doc, ret) {
            delete ret.password
            delete ret.__v
        }
}}
)

// fucntions 

//deleting unwanted fields
//handle response
// userSchema.methods.toJSON = function() {
//     // getting the user
//     const user = this.toObject()

//     // protecting the password
//     delete user.password

//     // deleting unwanted fields
//     delete user.__v
// }

// saving the password ecrypted on save
userSchema.pre('save', async function() {
    const user = this
    // checking if the user's modified
    if(user.isModified('password')) 
        //  hashing the password
        user.password = await bcrypt.hash(user.password, 12)

})

//login
userSchema.statics.loginUser = async(email, password) => {

    // finding the user
    const user = await User.findOne({email})

    if(!user) 
        throw new Error('Invalid email')

    // checking if the user is valid
    const isValidPass = await bcrypt.compare(password, user.password)

    if(!isValidPass) 
        throw new Error('invalid password')

    return user
}

// generating the token
userSchema.methods.generateToken = async function () {
    // getting the user
    const user = this

    // signing the token
    const token = jwt.sign({_id: user._id}, process.env.JWTPASS)

    // adding the token to the user
    //user.tokens.push({token})
    user.tokens = user.tokens.concat({token})

    // saving
    await user.save()

    return token
}

const User = mongoose.model('User', userSchema)

//exporting the model
module.exports = User