const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fname: { 
        type: String, 
        required: true 
    },
    lname: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password:{
        type:String,
        requird:true
    },
    image:{
        type:String,
        requird:true
    }  
});

const admin = mongoose.model("form", schema);
module.exports = admin;