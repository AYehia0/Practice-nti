//require('./db')
require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const postSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        postType:{
            type:String,
            required:true,
            enum: ['txt', 'img', 'vid'],
            trim:true
        },
        content:{
            type:String,
            // required if postType is txt
            required: function(){ return this.postType=="txt"}
        },
        postFile:{
            type:String,
            // required if postType is file or photo
            required: function(){ return this.postType !="txt"}
        },
        likes:[{
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
        }],
        comments: [{
            text: {
                type:String,
                required: true
            },
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            }

        }]
}, {timeStamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post