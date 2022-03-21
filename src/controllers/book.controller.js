const express = require("express");
// const res = require("express/lib/response");

const Book = require("../models/book.model");

const router = express.Router();

router.post("",async(req,res)=>{
    const book1 = await Book.create(req.body);
    return res.status(200).send({book1});
})

module.exports = router;