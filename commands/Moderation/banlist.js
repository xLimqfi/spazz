const Discord = require('discord.js');

const client = require("../../index.js");

module.exports = {
    name: "banlist",
    description: "base command format",
    category: "Moderation",
    usage: `{args}`,
    aliases: ["fetchbans"],

    run: async (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**BANLIST**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );

        const fetchbans = message.guild.fetchBans();
        const bannedMembers = (await fetchbans)
            .map((member) => `\`${member.user.tag}\``)
            .join(" ")

        const embed = new Discord.MessageEmbed()
            .setTitle("Server Bans")
            .setDescription(bannedMembers)
            .setColor("BLACK")
            .setTimestamp()
        await message.channel.send(embed);
    }
}