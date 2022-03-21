const express = require("express");
// const res = require("express/lib/response");

const Publication = require("../models/publication.model");

const router = express.Router();

router.post("",async(req,res)=>{
    const publication = await Publication.create(req.body);
    return res.status(200).send({publication});
})

module.exports = router;