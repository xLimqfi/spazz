const Discord = module.require("discord.js");

module.exports = {
  name: "unlock",
  description: "Unlocks a Channel",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["EMBED_LINKS", "MANAGE_CHANNELS", "MANAGE_MESSAGES"],
  category: "Moderation",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**UNLOCK**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    ); {
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).catch(e => {
      console.log(e);
      message.author.send("I couldn't unlock the channel. Please try again.")
    });
    const embed = new Discord.MessageEmbed()
      .setTitle("Channel Unlocked 🔓")
      .setDescription(`${message.channel} has been unlocked by a staff member for the reason: ${message.content.substring(8)}`)
      .setColor("#a3b10b");
    message.channel.send(embed);
        }
      }
    }