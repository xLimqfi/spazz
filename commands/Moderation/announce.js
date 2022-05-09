const Discord = require('discord.js');

module.exports = {
    name: "announce",
    category: "Moderation",
    description: "Announce something",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**ANNOUNCE**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );
        const channel = message.mentions.channels.first()
        if (!args.length) return message.channel.send(`Usage: announcement #channel <text>`) 
        if (!channel) {
            message.reply("Specify A Channel To Send This Announcement")
            return
        } else {
            let announce = args.slice(1).join(" ")
            if(!announce) return message.channel.send(`Please Specify What Do You Want To Announce`)
            const embed = new Discord.MessageEmbed()
            .setTitle(`Announcement`)
            .setDescription(`${announce}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter("Sent by:"   + message.author.username +'#'+ message.author.discriminator)
            .setColor("#0ed6c0")
            channel.send(embed)
            channel.send(`@here`).then(m => m.delete())
        }
    }
}