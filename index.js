const TelegramApi = require('node-telegram-bot-api')

const token = "2102079833:AAFZr6qewhYZRIEZHwev0DLFELXbv0ONioA"

const bot = new TelegramApi(token, { polling: true })

bot.on('message', msg => {
	const text = msg.text;
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, `you are sending me letter ${msg.from.first_name}`);
})