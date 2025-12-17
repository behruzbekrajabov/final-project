import "./src/bot/bot.js";
import "dotenv/config";
import mongoose from "mongoose";


async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("🎆DB connected🎆");
    })
    .catch(() => {
      console.log("Error: DB didn`t connect!!!");
    });
}

connectDB();

console.log("Dastur ishga tushmoqda...");

