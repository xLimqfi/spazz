const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
module.exports = {
  name: "why",
  category: "Fun",
  description: "random why?",
  run: async(client, message, args) => {
    let url = await neko.sfw.why()
    const embed = new Discord.MessageEmbed()
    .setTitle('**Why??**')
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RED")
    .setDescription(url.why) 
    message.channel.send(embed)
  }
}