const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const express = require('express');

// Khởi tạo bot Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Bot đã online: ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong! 🏓');
  }
});

// Thêm Express.js để giữ Render hoạt động
const app = express();
app.get('/', (req, res) => {
    res.send('Bot is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT}`);
});

// Đăng nhập bot Discord
client.login(process.env.DISCORD_TOKEN);
