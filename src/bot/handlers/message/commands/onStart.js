async function onStart(msg){
    const chatId = msg.chat.id
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
export default onStart