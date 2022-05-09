  
const Discord = require('discord.js');

module.exports = {
 name: "gayrate",
 aliases: ['gr', 'howgay'],
 category: "Fun",
 usage: "gayrate",
 description: "measure gay rate",
 run: async(client, message, args) => {

const user = message.author
const taggedUser = message.mentions.users.first();
let gayrate = Math.floor(Math.random() * 101)

if(taggedUser) {
let argsEmbed = new Discord.MessageEmbed()
    .setTitle("Gayrate Machine")
    .setColor("PURPLE")
    .setDescription(`${taggedUser.username} is \`${gayrate}%\` gay! 🏳️‍🌈`)
    .setFooter(message.client.user.username, message.client.user.avatarURL())
  message.channel.send(argsEmbed)
  }

else  
if(user) {
let gayrateEmbed = new Discord.MessageEmbed()
    .setTitle("Gayrate Machine")
    .setColor("GREEN")
    .setDescription(`${user.username} is \`${gayrate}%\` gay! 🏳️‍🌈`)
    .setFooter(message.client.user.username, message.client.user.avatarURL())
  message.channel.send(gayrateEmbed)
  }
 }
}

