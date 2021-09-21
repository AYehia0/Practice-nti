const fs = require('fs')
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    filename: function(req, file, cb){

        // file.fieldname : the filename, 
        // extname : .jpg, .pdf ,,,, etc 
        const fileName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`

        // the callback
        cb(null, fileName)
    },
    destination: function(req, file, cb) {

        // getting the role 
        const location = path.join('uploads', `${req.user.position}-${String(req.user._id)}`)

        // creating dir if not exist
        fs.mkdir(location, (err)=>{})

        cb(null, location)
    }
})

const upload = multer({

    storage: storage,
    limits:{fileSize: 200000},

    // limiting what to upload
    // fileFilter: function(req, file, cb){
    //     if( path.extname(file.originalname) != '.pdf' ) return cb(new Error('invalid ext'))
    //     cb(null, true)
    // }

})

module.exports = upload