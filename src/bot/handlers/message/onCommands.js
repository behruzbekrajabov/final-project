import { bot } from "../../bot.js";
import User from "../../../models/models.js";

async function onCommands(msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;

  
  if (text == "/start") {
    const existingUser = await User.findOne({ chatId: chatId });

    bot.sendMessage(chatId, `Assalomu aleykum, xush kelibsi, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Kurslar" }],
          [{ text: "Menu" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });

    

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

    return;
  }
  if (text == "Kurslar") {
      await bot.sendMessage(chatId, "📚 Kurslarimiz:", {
        reply_markup: {
          inline_keyboard: [
            [{ text: "🟨 JavaScript", callback_data: "course_js"}],
            [{ text: "🟩 Backend (Node.js)", callback_data: "course_backend"}],
            [{ text: "🤖 Telegram Bot", callback_data: "course_tg"}],
          ],
        },
      });
    }

  if (text == "/help") {
    return bot.sendMessage(chatId, `Yordam kerakmi, ${firstname}?`);
  }

  if (text == "/users") {
    const userNum = await User.countDocuments();
    const allUsers = await User.find();
    bot.sendMessage(
      chatId,



      `Users: ${userNum}`
    );
    console.log(allUsers);
    for (let user of allUsers) {
      bot.sendMessage(
        chatId,
        `${user.firstname} -> ${user.chatId}, Users: ${allUsers}`
      );
    }

    return;
  }
  if (text == "/profile") {
    const existingUser = await User.findOne({
      chatId: chatId,
    });
    console.log(existingUser);

    bot.sendMessage(
      chatId,
      `
      Mening Profilim:/n
      #chatID: ${existingUser.chatId}
      #Ism: ${existingUser.first_name}
      #User name: ${existingUser.username}
      #Active: ${existingUser.active}
      #Balance: ${existingUser.balance}

      `
    );
    return;
  }
}

export default onCommands;
