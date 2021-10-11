"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;
const BOT_CHANNEL = process.env.BOT_CHANNEL;

function gotMessage(message) {
    console.log("New Message", message);
    if ((message.content.match(/([a-z]a/)) && message.channel.id == BOT_CHANNEL)
        message.reply("que rico la come 7u7");
}

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});

client.on("messageCreate", gotMessage);

// Login to Discord with your client's token
client.login(TOKEN);
