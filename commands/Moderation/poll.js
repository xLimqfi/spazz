const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "poll",
  category: "Moderation",
  description: "Starts a poll",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**POLL**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );
        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")
        if(!channelID) return message.reply("Please specify a channel you want the poll to be in!")
        if(!theDescription) return message.reply("Please specify a question for the poll!")
        const embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle("POLL TIME")
        .setDescription(theDescription)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setFooter("Poll started by: "+ message.author.username +'#'+ message.author.discriminator) 
        let msgEmbed = await channelID.send(embed)
        await msgEmbed.react('✅')
        await msgEmbed.react('❌')
    }
}