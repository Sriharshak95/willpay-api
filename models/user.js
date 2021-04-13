const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username:{
        type:String,
        minLength:1,
        required:true
    },
    email:{
        type:String,
        required:true       
    },
    profile_image:{
        type:String
    }
})


module.exports = mongoose.model("User", Schema)