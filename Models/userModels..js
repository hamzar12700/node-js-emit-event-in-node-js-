import mongoose from "mongoose";


let userModel = mongoose.Schema({
    username : {
        type : String,
        unique : true
    },
     email : {
        type : String,
        unique : true
    },
     password : {
        type : String,
    },
})


export default mongoose.model('userModel', userModel)