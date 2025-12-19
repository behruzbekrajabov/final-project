async function onProfile(msg){
    const chatId = msg.chat.id;
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
export default onProfile