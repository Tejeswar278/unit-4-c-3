const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    likes:{type:Number},
    coverImage:{type:String, required: true},
    content:{type:String, required: true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
    
},{
    timestamps: true,
    versionKey: false
})

const Book = mongoose.model("book1", bookSchema);

module.exports = Book;