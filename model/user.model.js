const  mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    id:Number,
    FastName:String,
    LastName:String,
    age:Number,
    gender:String,
    email:String,
    phone:String,
    user:String,
    password:String,
    birthofDate:String,
    religion:String,
    postalCode:String,
    nationallty:String,
    ocupation:String,
    nid:Number,
    height: Number,
      weight: Number,
    country:String,
    address:String,
    city: String,
        state: String,
        stateCode: Number,
        postalCode: Number,
})

const usermodel = mongoose.model("User", userSchema)

module.exports = usermodel;