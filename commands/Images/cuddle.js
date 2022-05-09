const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
module.exports = {
  name: "cuddle",
  category: "Images",
  description: "cuddle someone",
  run: async(client, message, args) => {
    const member = message.mentions.members.first()
        if(!member) return message.channel.send('Please specify a member you want to cuddle')
        if(member.id == message.author.id) return message.channel.send('<a:no:971654133239123969> You can\'t cuddle with yourself!')
        if(member.bot) return message.channel.send('<a:no:971654133239123969> You can\'t cuddle with bots.')
    let url = await neko.sfw.cuddle()
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${member.user.id}>, you got a cuddle from <@${message.author.id}> (=；ェ；=)`)
    .setImage(url.url)
    message.channel.send(embed)
  }
}
