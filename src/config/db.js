const mongoose = require("mongoose");

const connect = async()=>{
    return mongoose.connect("mongodb://localhost:27017/books");
}

module.exports = connect;