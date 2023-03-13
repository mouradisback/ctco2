const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    created_at: {
        type: Date,
        default: Date.now()
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    full_name: {
        type: String,
        required: true,
        
    },
    passwordHash:{
        type: String,
        required: true
    },
    permissions: [

    ]
})

exports.User = mongoose.model('User', userSchema)