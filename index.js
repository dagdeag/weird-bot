const Discord = require('discord.js')
const TOKEN = "OTI1NTA3Mjg3NDA0MTQyNjIy.YcuH1A.MUG8YHLTgb3iJ8NHpqjRAiRUd8s"
require('dotenv').config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
client.on("messageCreate", (message) => {
    if (message.reactions.message.tts == true && message.content === "hi"){
        message.reply('Suuuuuup')
        console.log('sent and message was tts')
    }
})

client.on("ready", () => console.log(`Logged in as ${client.user.tag}`))


client.login(process.env.TOKEN)