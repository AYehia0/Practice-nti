require('./db')
require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// extra packages for validation and auth
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

/*

User has :
    - name
    - email
    - password
    - age
    - position [manager, emp, ceo]
 
*/

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
    password: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isStrongPassword(value, {minLength: 6, minLowercase: 1, minUppercase: 1}))
                throw new Error("Password isn't strong enough")
        }
 
    },
    age: {
        type: Number
    },
    position: {
        type: String,
        required: true,
        // manager, employer, CEO
        enum: ['man', 'emp', 'ceo']
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    // logging modification
    timestamps:true, 
    // removing things from request
    toJSON:{
        transform(doc, ret) {
            delete ret.password
            delete ret.__v
        }
}
})

// saving the password in encypted form
userSchema.pre('save', async function(){
    const user = this

    if (user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 12)
})

// login
// 
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


module.exports = User