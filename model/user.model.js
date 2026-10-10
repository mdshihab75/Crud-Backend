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
    birthDate:String,
    bloodGroup:String,
    eyeclour:String,
    nid:Number,
    height: Number,
      "weight": 63.16,
    country:String,
    address:String,
    city: String,
        state: String,
        stateCode: Number,
        postalCode: Number,
    hair: {
    color: String,
    type: String
},

})

const usermodel = mongoose.model("User", userSchema)

module.exports = usermodel;