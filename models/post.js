const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    product_title:{
        type:String,
        required:true,
        minLength:1
    },
    product_desc:{
        type:String,
        required:true,
        minLength:1,
        maxLength:240  
    },
    private:{
        type:Boolean,
        default:false
    },
    share_email:{
        type:Boolean,
        default:false
    },
    domain:{
        type:[String], 
        default:[]
    },
    target:{
        type:[String], 
        default:[]
    },
    niche_target:{
        type:[String], 
        default:[]
    },
    priceRangeMin:{
        type:Number        
    },
    priceRangeMax:{
        type:Number        
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    }
})

module.exports = mongoose.model("Post", Schema)