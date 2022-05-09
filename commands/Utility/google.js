const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")


module.exports = {
 name: "google",
 aliases: ['search'],
 usage: "goolge <search>",
 category: "Utility",
 description: "search from google",
 run: async(client, message, args) => {

let msg = message.content.split(" ");

let query = msg.slice(1).join("+");

let queryD = msg.slice(1).join(" ");

if(!query)
  return message.channel.send(
    new Discord.MessageEmbed()
      .setTitle("**Google**")
      .setDescription("```yaml\nPlease specify a google search query.```")
      .setThumbnail('https://media.tenor.com/images/f97eeae3a7e0fd67d6813cfcdf875873/tenor.gif')
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
      .setColor('#4c8bf5')
  )
else {
  message.channel.send(
    new Discord.MessageEmbed()
      .setTitle("**Google**")
      .setDescription(`\`\`\`yaml\nHere is your search result.\n\`\`\` [Click Here](https://www.google.com/search?q=${query})`)
      
      .setThumbnail('https://media.tenor.com/images/f97eeae3a7e0fd67d6813cfcdf875873/tenor.gif')
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
      .setColor('#4c8bf5')    
  )
}
 }
}