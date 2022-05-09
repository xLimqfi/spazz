const Discord = require('discord.js');
const client = require("../../index.js");


module.exports = {
    name: "kick",
    description: "Kick a member.",
    category: "Moderation",
    usage: `{member} {reason}`,
    aliases: [],
    run: async (client, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**KICK**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );

        if (message.author.bot || message.channel.type === "dm") return false;
        if (!args[0]) return message.reply("Please specify a user.");
        let toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        const reason = args[1] || "none";
        await toKick.kick({
            reason: reason
        });
        if (reason === "none") {
            const embed = new Discord.MessageEmbed()
                .setTitle(`${toKick.user.tag} was kicked.`)
                .setColor("BLACK")
            await message.channel.send(embed)
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle(`${toKick.user.tag} was kicked.\nReason: ${reason}`)
                .setColor("BLACK")
            await message.channel.send(embed)
        }
    }
}