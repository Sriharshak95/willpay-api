let router = require('express').Router();
const Post = require("../models/post")

router.get('/posts', async(req,res)=>{
    const posts = await Post.find()
    res.send(posts)
})

router.post('/posts', async(req,res)=>{
    // const post = new Post({
    //     product_title:req.body.product_title,
    //     product_desc:req.body.product_desc,
    //     priceRangeMin:req.body.priceRangeMin,
    //     priceRangeMax:req.body.priceRangeMax,
    //     domain:req.body.domain,
    //     target:req.body.target,
    //     niche_target:req.body.niche_target,
    //     private:req.body.private
    // })

    const post = new Post({
        ...req.body,
        owner:req.user._id
    })

    await post.save()
    res.send(post)
})

module.exports = router;