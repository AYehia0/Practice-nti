require('./db')
require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    whoAdded: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assignedTo: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type:{
            type: String,
            enum: ['txt', 'file']
        },
        file: {
            type: String,
            trim: true,
            required: function() {
                return this.type == "file"
            }
        },
        text: {
            type: String,
            trim: true,
        }
    },
    response: [{
        empId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        data: {
            type:{
                type: String,
                required: true,
                enum: ['txt', 'file']
            },
            file: {
                type: String,
                trim: true,
                required: function() {
                    return this.type == "file"
                }
            },
            text: {
                type: String,
                trim: true,
            }
        }

    }]
}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task

