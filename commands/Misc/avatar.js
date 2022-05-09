const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    description: "view a member's avatar",
    category: "Misc",
    aliases: ["av", "pfp"],


    run: async (bot, message, args) => {
        const member = message.mentions.members.first() || message.member;
        const avatarEmbed = new Discord.MessageEmbed()
            .setTitle(`${member.user.tag}'s Avatar`)
            .setImage(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .setColor(`RED`)
        await message.channel.send(avatarEmbed);
    }
}
