const { MessageMenu } = require('discord-buttons');
const Discord = require('discord.js')



module.exports = {
    name: "snipe",
    description: "Snipe a message.",
    category: "Moderation",
    aliases: [""],

    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**SNIPE**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );
    const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
//code starts here
  
  const msg = client.snipes.get(message.channel.id);
  if(!msg) return message.channel.send("No recently deleted messages!")
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Deleted by: ${msg.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
  .setColor("BLACK")
  .setDescription(`Content: \n${msg.content}`)
  .setFooter('Get Sniped lol')
  .setTimestamp();
  
  
  if (msg.image) embed.setImage(msg.image);
  return message.channel.send(embed)
}}}
