 const mongoose = require("mongoose");
 
const userSchema = new mongoose.Schema;

const userSchema = new userSchema({
    id:Number,
    name:String,
});

const User = mongoose.model("User",userSchema);

module.exports = User;