// the user model
const User = require('../models/user')

// the main route GET; for testing only
const main = (req, res, err) => {
    res.status(200).json("hello server")
}

// register
const registerUser =  async (req,res)=>{

    try{
        const userData = new User(req.body)
        
        await userData.save()
        res.status(200).send({
            apiStatus:true,
            data:userData,
            message:"Success"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "Error"
        })
    }
}

// add address 
const addAddress = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const addr = req.body

        user.addresses.push(addr)

        await user.save()
        res.status(200).send({
            apiStatus:true,
            data:user,
            message:"data added successfuly"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "error in register"
        })
    }
}

// login
const loginUser = async(req,res)=>{
    try{
        let user = await User.loginUser(req.body.email, req.body.password)
        
        //getting the token 
        const token = await user.generateToken()

        res.status(200).send({ apiStatus:true, data:{user, token}, message:"Success" })
    }
    catch(e){
        res.status(401).send({ apiStatus:false, data:e.message, message:"Login failed" })
    }
}

const userProfile = async (req, res) => {
    res.send(req.user)
}
// - logout
// - profile
// - edit profile
// - deactivate 
// - activate


// exporting the callbacks
module.exports = {
    main,
    registerUser,
    addAddress,
    loginUser,
    userProfile
}