const { Telegraf } = require('telegraf')

let range = 1000
const bot = new Telegraf("5354926949:AAHvq5ieKv_sQfWd5Cv43E7MtwWVtE9Vlkg")
bot.start((ctx) => ctx.reply('1000-7?'))
bot.hears(`sf banned`, (ctx) => {
    ctx.reply(`${range}`)
    range = range - 7
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))