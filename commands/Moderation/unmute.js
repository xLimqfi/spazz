const Discord = require('discord.js');

module.exports = {
    name: "unmute",
    description: "Unutes a member.",
    category: "Moderation",
    aliases: [""],
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**UNMUTE**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send(`I dont have permissions to umute`);
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.reply('Please specify a user.')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} is now unmuted`)
    }
}