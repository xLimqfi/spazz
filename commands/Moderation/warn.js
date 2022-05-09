const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
        name: "warn",
        category: "Moderation",
        description: "warn members",
        aliases: [""],
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**WARN**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Please specify a user.");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No Reason Provided)";
            
            member.send(`You have been warned by ${message.author.username} with the reason: ${reason}`)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't warn because of : ${error}`));
            let warnEmbed = new MessageEmbed()
            .setTitle("**__Warn Report__**")
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Moderator:**`, `${message.author}`)

            message.channel.send(warnEmbed)

    }
}