const { Telegraf } = require('telegraf');

const TOKEN = '6636838090:AAFhYpm3ECMcClDw6yrnE_NAXcgFYSFx7ZQ'
const bot = new Telegraf(TOKEN)

const web_link = ''

bot.start((ctx) => ctx.reply('Welcome Sir', {reply_markup{keyboard:[[{text:'Web app',web_app:{url:web_link}]]}
})
);

bot.launch()