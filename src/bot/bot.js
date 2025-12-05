import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import onCommands from "./handlers/message/onCommands.js";
dotenv.config()

export const bot = new TelegramBot(process.env.BOT_TOKEN, { polling:true })



bot.on("message", function(msg){
    const chatID = msg.chat.id;
    const firstname = msg.chat.first_name;
    const text = msg.text;
    if (text.startsWith("/")) {
        return onCommands(msg);
    }

    bot.sendMessage(chatID, `Hello, ${firstname}`)
})

console.log("Dastur ishga tushdi");


// export default {bot}