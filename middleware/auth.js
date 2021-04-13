const User = require('../models/user')
const {OAuth2Client} = require('google-auth-library');
const auth = require('../db/config.json');
const client = new OAuth2Client(auth.google_client_id);
const jwt = require('jsonwebtoken');

const auth = async(req,res,next) =>{
    try{
        // const token = req.header('Authorization')
        console.log("token")
    }catch(e){
        res.status(401).send({error:'Please authenticate'})
    }
}

module.exports = auth