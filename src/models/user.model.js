const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{type: String,required: true},
    LastName:{type: String},
    age:{type:Number,required: true},
    email:{type:String, required: true, unique:true},
    profileImage:{type:String}
},{
    timestamps: true,
    versionKey: false
})

const User = mongoose.model("user", userSchema);

module.exports = User;