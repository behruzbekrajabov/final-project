import { bot } from "../../bot.js";
import User from "../../../models/models.js";
import onStart from "./commands/onStart.js";
import onProfile from "./commands/onProfile.js";
import onCourse from "./oncourse.js";
import onProfile from "./commands/onProfile.js";
import onUsers from "./commands/onUsers.js";

async function onCommands(msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;

  
  if (text == "/start") {
    onStart(msg)
  }
  if (text == "Kurslar") {
      onCourse(msg)
    }

  if (text == "/help") {
    return bot.sendMessage(chatId, `Yordam kerakmi, ${firstname}?`);
  }

  if (text == "/users") {
    onUsers(msg)
  }
  if (text == "/profile") {
    onProfile(msg)
  }
}

export default onCommands;
