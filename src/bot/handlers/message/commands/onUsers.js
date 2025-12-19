async function onUsers(msg) {
    const chatId = msg.chat.id
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
export default onUsers