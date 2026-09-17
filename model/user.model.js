const  mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    id:Number,
    FastName:String,
    LastName:String,
    age:Number,
    Gender:String,
    email:String,
    phone:String,
    user:String,
    password:String,
    birthDate:String,
    bloodGroup:String
})

const usermodel = mongoose.model("User", userSchema)

module.exports = usermodel;