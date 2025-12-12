import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import onCommands from "./handlers/message/onCommands.js";
dotenv.config()

const CHANNEL = "@IT_Park91";

export const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const chatMember = await bot.getChatMember(CHANNEL, chatId);

  console.log(chatMember);

  if (chatMember.status == "kicked" || chatMember.status == "left") {
    return bot.sendMessage(
      chatId,`Botni ishlatish uchun kanalga obuna boling @academy_100x_uz`,
      {
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              {
                text: "100x Academy",
                url: "https://t.me/academy_100x_uz",
              },
            ],
            [
              {
                text: "Obunani TAsdiqlash",
                callback_data: "confirm_subs",
              },
            ],
          ],
        },
      }
    );
  }

    bot.sendMessage(chatId, `Hi, ${firstname}`);
})

bot.on("callback_query", async function(){
    const chatId = query.msg.chat.id;
    const firstName = msg.first_name;
    const data = query.data;
    if (data == "confirm_subs") {
        const chatMember = await bot.getChatMember(CHANNEL, chatId);
        console.log(chatMember);

        if (chatMember.status === "kicked" || chatMember.status === "left") {
            return bot.sendMessage(chatId, `Oldin,  @academy_100x_uz`,
            {
                reply_markup:{
                    remove_keyboard:true,
                    inline_keyboard:[
                        [
                            {
                            text:"100x academy",
                            url:"https://t.me/academy_100x_uz"
                        },

                    ],
                    [
                        {
                            text:"Obunani tasdiqlash",
                            callback_data:"confirmSubs"
                        },
                        ],
                    ],
                    
                },
            }
    );
        }
        
    }
});



console.log("Dastur ishga tushdi 🎆");


// export default {bot}