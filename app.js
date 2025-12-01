import TelegramBot from "node-telegram-bot-api";
import "./src/bot/bot.js"
import dotenv from "dotenv";


dotenv.config();






export const bot = new TelegramBot(process.env.BOT_TOKEN, {polling:true})
console.log("Dastur ishga tushmoqda...");
