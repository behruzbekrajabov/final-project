async function onCourse(msg) {
    const chatId = msg.chat.id
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
export default onCourse