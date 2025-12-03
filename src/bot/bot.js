import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config()

export const bot = new TelegramBot(process.env.BOT_TOKEN, { polling:true })

bot.on("message", function(msg){
    const chatID = msg.chat.id;
    const firstname = msg.chat.first_name;
    // const lastName = msg.chat.last_name;
    bot.sendMessage(chatID, `Hello, ${firstname}`)
})

console.log("Dastur ishga tushdi");
