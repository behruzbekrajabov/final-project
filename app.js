import TelegramBot from "node-telegram-bot-api";
import "./src/bot/bot.js"
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
async function connectDB() {
    await mongoose.connect(process.env.MONGOOSE_URI)
    .then(() =>{

        console.log("🎆DB connected🎆");
        
    })
    .catch(() =>{

        console.log("Error: DB didn`t connect!!!");
        
    })
}

export const bot = new TelegramBot(process.env.BOT_TOKEN, { polling:true })

console.log("Dastur ishga tushmoqda...");