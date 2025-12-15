import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import onCommands from "./handlers/message/onCommands.js";
dotenv.config();

const CHANNEL = "@IT_Park91";

export const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const chatMember = await bot.getChatMember(CHANNEL, chatId);

  console.log(chatMember);
 
  //Boshlash 🔥

  if (chatMember.status == "kicked" || chatMember.status == "left") {
    bot.sendMessage(
      chatId,
      `Botni ishlatish uchun kanalga obuna boling @IT_Park91`,
      {
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              {
                text: "100x Academy",
                url: "https://t.me/IT_Park91",
              },
            ],
            [
              {
                text: "Obunani Tasdiqlash",
                callback_data: "confirm_subs",
              },
            ],
          ],
        },
      }
    );
  }


   if (text.startsWith("/")) {
    return onCommands(msg)
  }
});

bot.on("callback_query", async function (query) {
  const chatId = query.message.chat.id;
  // const firstName = query.msg.firstname;
  const firstName = query.from.first_name;
  const data = query.data;
  if (data == "confirm_subs") {
    const chatMember = await bot.getChatMember(CHANNEL, chatId);
    console.log(chatMember);

    if (chatMember.status === "kicked" || chatMember.status === "left") {
      return bot.sendMessage(chatId, `Oldin,  @IT_Park91`, {
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              {
                text: "100x academy",
                url: "@IT_Park91",
              },
            ],
            [
              {
                text: "Obunani tasdiqlash",
                callback_data: "confirmSubs",
              },
            ],
          ],
        },
      });
    } else if (chatMember.status === "member") {
      bot.sendMessage(chatId, `Obuna uchun rahmat, ${firstName}`, {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "LDdkjfaslf",
                callback_data: "asd",
              },
            ],
          ],
        },
      });
    }
  }
});

console.log("Dastur ishga tushdi 🎆");

// export default {bot}
