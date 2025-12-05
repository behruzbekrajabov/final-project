import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    TelegramId:{
        type:String,
        required:true,
        unique:true,
    },
    firstName:{
        type:String,
    },
    username:{
        type:Boolean,
        default:null
    },
    active:{
        type:Boolean,
        default:true,
    },
    balance:{
        type:Number,
        default:0,
    },
},
{timestamps: true}
)
const User = new mongoose.model("User", userSchema)

export default {User}