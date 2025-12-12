import { bot } from "../../bot.js";
import User from "../../../models/models.js";

async function onCommands(msg) {
  const chatId = msg.chat.id;
  const firstname = msg.chat.first_name;
  const text = msg.text;

  if (text == "/start") {
    const existingUser = await User.findOne({ chatId: chatId });

    if (!existingUser) {
      const newUser = new User({
        chatId: chatId,
        firstname: firstname,
        username: msg.chat.username,
      });
      newUser.save();
    } else {
      console.log(existingUser);
    }

    return bot.sendMessage(
      chatId,
      `Assalomu aleykum, xush kelibsiz, ${firstname}`,
      {
        reply_markup: {
          keyboard: [
            [{ text: "📚 Kurslar" }, { text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "ℹ️ Markaz haqida" }, { text: "💬 Fikr bildirish" }],
            [{ text: "❓ Yordam" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  }

  if (text == "/help") {
    return bot.sendMessage(chatId, `Yordam kerakmi, ${firstname}?`);
  }
  if (text == "/users") {
    const userNum = await User.countDocuments();
    const allUsers = await User.find();
    bot.sendMessage(chatId, `Users: ${userNum}`);
    console.log(allUsers);
    for (let user of allUsers) {
      bot.sendMessage(chatId, `${user.firstname} -> ${user.chatId}`);
    }

    return;
  }
  if (text == "/profile") {
    const existingUser = await User.findOne({
      chatId: chatId,
    });
    console.log(existingUser);

    return bot.sendMessage(
      chatId,
      `
      Mening Profilim:/n
      #chatID: ${existingUser.chatId}
      #Ism: ${existingUser.chatId}
      #User name: ${existingUser.chatId}
      #Active: ${existingUser.chatId}
      #Balance: ${existingUser.chatId}

      `
    );
  }

  if (chatId == 1072558595) {
    return;
  }

  return bot.sendMessage(chatId, `Error /start`);
}

export default onCommands;
