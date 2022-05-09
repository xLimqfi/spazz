const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");

module.exports = {
name: 'hug',
description: 'Hug someone',
category: "Fun",
run: async (client, message, args) => {

const member = message.mentions.members.first()
if(!member) return message.channel.send('Please specify a member you want to hug!')
if(member.id == message.author.id) return message.channel.send('You can\'t hug yourself!')
if(member.bot) return message.channel.send('You can\'t hug bots.')

let url = await neko.sfw.hug()
const embed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setDescription(`<@${member.user.id}>, you got a hug from <@${message.author.id}> owo`)
.setImage(url.url) 
message.channel.send(embed)
}
}