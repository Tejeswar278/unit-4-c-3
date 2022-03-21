const express = require("express");
// const res = require("express/lib/response");

const Comment = require("../models/comment.model");

const router = express.Router();

router.post("",async(req,res)=>{
    const comment = await Comment.create(req.body);
    return res.status(200).send({comment});
})

module.exports = router;