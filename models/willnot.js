const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    comment:{
        type:String,
        minLength:1
    },
    email:{
        type:String,
    }
})

module.exports = mongoose.model("WillNot", Schema)