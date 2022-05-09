const Discord = module.require("discord.js");

module.exports = {
  name: "lock",
  description: "Locks a Channel",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["EMBED_LINKS", "MANAGE_CHANNELS"],
  category: "Moderation",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**LOCK**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    ); {
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false }).catch(e => {
console.log(e);
message.author.send("I couldn't lock the channel. Please try again.")
});
const embed = new Discord.MessageEmbed()
      .setTitle("Channel Locked 🔒")
      .setDescription(`${message.channel} has been locked by a staff member for the reason: ${message.content.substring(8)}`)
      .setColor("BLUE");
     message.channel.send(embed);
  }
}
}