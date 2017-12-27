const mongoose = require('mongoose')
const { Schema } = mongoose //const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    credits: { 
        type: Number,
        default: 0 
    },
})

//this creates a new collection call users using userSchema schema!
mongoose.model('users', userSchema)