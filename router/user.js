let router = require('express').Router();
const User = require("../models/user")
const {OAuth2Client} = require('google-auth-library');
const auth = require('../db/config.json');
const client = new OAuth2Client(auth.google_client_id);
const jwt = require('jsonwebtoken');

router.get('/user', async(req,res)=>{
    const users = await User.find()
    res.send(users)
})


router.post('/user', async(req,res)=>{
    console.log("req.body");
    const user = new User({
        email:req.body.email,
        password:req.body.password
    })

    await user.save()
    res.send(user)
})


router.post("/v1/auth/google",async(req,res)=>{
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience:auth.google_client_id
    })

    const {name,email,picture,email_verified} = ticket.getPayload();
    if(email_verified){
        User.findOne({email}).exec((err,user)=>{
            if(err){
                return res.status(400).json({
                    error: "Something went wrong..."
                })
            } else{
                if(user){
                    const token = jwt.sign({_id:user._id},"willpaycustomboarding",{expiresIn:'2h'})
                    const {_id,username,email,profile_image} = user;
                    
                    res.send({
                        token,
                        user:{_id,username,email,profile_image}
                    });
                }else{
                    const newUser = new User({username:name, email, profile_image:picture});
                    newUser.save((err,data)=>{
                        if(err){
                            return res.status(400).json({
                                error:'Something went wrong...'
                            })
                        }
                        
                    const token = jwt.sign({_id:newUser._id},"willpaycustomboarding",{expiresIn:'2h'})
                    const {_id,username,email,profile_image} = newUser;
                    
                    res.send({
                        token,
                        user:{_id,username,email,profile_image}
                    });
                    })
                }
            }
        })
    }
    // const user = new User({
    //    username:name,
    //    email,
    //    profile_image:picture 
    // });

    // await user.save()
    res.send(user)
})

module.exports = router