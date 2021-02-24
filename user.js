const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        // required:true
    },
    LastName:{
        type:String,
        // required:true
    },
    PhoneNumber:{
        type:String,
        // required:true
    },
    Email:{
        type:String,
        // required:true
    },
    Password:{
        type:String,
        // required:true
    },
    ConfirmPassword:{
        type:String,
        // required:true
    }
});
const userData=mongoose.model('userData',UserSchema);
module.exports =userData;