 const TelegramBot = require('node-telegram-bot-api');

const token = "2130819595:AAEmv0v1K2OhoDeEBjXGOT5a5Hc5MDEn_gU";
const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
{command:'/start', description:"начало"}
])

let rsdp = [
`
Понедельник
1.Мистецтво
2.Хімія
3.Алгебра
4.Англиский
5.Інформатика
6.фіз ра 
7.Біология

`
,
`
Вторник
1.Укр.мова
2.Укр.літ
3.нім
4.Геометрія
5.фіз-ра
6.зарубіжна
7.фізіка
8.факультатив

`
,
`
Среда
1.укр.мова
2.Хімія
3.Фізіка
4.Алгебра
5.фіз-ра
6.Географія

`
,
`
Четверг
1.Укр.літ
2.Нім
3.Всесвітня
4.Географія
5.Біология
6.Труди
7.факультатив


`
,
`
Пятница
1.Іст.України
2.Геометрія
3.осн.здор
4.Англиский
5.зарубіжна
6.музик
7.факультатив

`

]
bot.onText(/\/start/, function(msg) {
	const id= msg.chat.id;
  bot.sendMessage(id,`
  	Это расписание 7-б
  	Введите:Понедельник,вторник, среда,четверг,пятница 
  	и получете расписание)


  	`)
})



bot.on("message", function(msg){
	
	const id= msg.chat.id;
	const text = msg.text

	if(text.toLowerCase()=="понедельник"){
		bot.sendMessage(id,rsdp[0])
	}
	if(text.toLowerCase()=="вторник"){
		bot.sendMessage(id,rsdp[1])
	}
	if(text.toLowerCase()=="среда"){
		bot.sendMessage(id,rsdp[2])
	}
	if(text.toLowerCase()=="четверг"){
		bot.sendMessage(id,rsdp[3])
	}
	if(text.toLowerCase()=="пятница"){
		bot.sendMessage(id,rsdp[4])
	}
	if(text.toLowerCase()== "кукурудза"){
		bot.sendMessage(id,"Слава нації")
	}
	if(text.toLowerCase() == "1"){
		bot.sendPhoto(id,"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/250px-Flag_of_Ukraine.svg.png")
	}
	

})