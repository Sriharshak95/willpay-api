const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    comment:{
        type:String,
        minLength:1
    },
    setPriceRangeMin:{
        type:Number        
    },
    setPriceRangeMax:{
        type:Number        
    },
    creator_email:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("WillPay", Schema)