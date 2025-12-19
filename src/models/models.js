import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    chatId:{
        type:String,
        required:true,
        unique:true,
    },
    firstName:{
        type:String,
    },
    username:{
        type: String,
        default:null
    },
    active:{
        type: Boolean,
        default:true,
    },
    balance:{
        type:Number,
        default:4000,
    },
    action:{
        type: String,
        default:"user_created"
    },
    name:String,
    phone:String
},
{timestamps: true}
)
const User = new mongoose.model("User", userSchema);

export default User