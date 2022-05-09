const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",
    description: "View information about the guild.",
    category: "Misc",
    usage: ``,
    aliases: ["svinfo", "sv"],

    run: async (bot, message, args) => {

        const {guild} = message;

        const icon = message.guild.iconURL();
        const roles = message.guild.roles.cache.map(e => e.toString()).join(" ");
        const emojis = message.guild.emojis.cache.map(e =>  e.toString()).join(" ");
        const emojiCount = message.guild.emojis.cache;
        const members = message.guild.members.cache;
        const create = message.guild.createdAt.toLocaleDateString();
        const owner = guild.owner;
        const id = guild.id;
        const boostCount = guild.premiumSubscriptionCount;
        const boostLevel = guild.premiumTier;
        const memberCount = members.size;
        const humanCount = members.filter(member => !member.user.bot).size;
        const botCount = members.filter(member => member.user.bot).size;
        const highestRole = guild.roles.highest;
        const onlineMembers = guild.members.cache.filter(member => member.presence.status === 'online').size;
        const idleMembers = guild.members.cache.filter(member => member.presence.status === 'idle').size;
        const dndMembers = guild.members.cache.filter(member => member.presence.status === 'dnd').size;
        const offlineMembers = guild.members.cache.filter(member => member.presence.status === 'offline').size;
        const emojiStatic = emojiCount.filter(emoji => !emoji.animated).size;
        const emojiAnimated = emojiCount.filter(emoji => emoji.animated).size;
        const textChannelCount = guild.channels.cache.filter(channel => channel.type === 'text').size;
        const voiceChannelCount = guild.channels.cache.filter(channel => channel.type === 'voice').size;
        const newsChannelCount = guild.channels.cache.filter(channel => channel.type === 'news').size;
        const categoryCount = guild.channels.cache.filter(channel => channel.type === 'category').size;

        const embed = new Discord.MessageEmbed()
            .setAuthor(guild.name, message.guild.iconURL())
            .setColor("#2F3136")
            .setThumbnail(icon)
            .addField('Server Owner:', `${owner} \`${id}\``)
            .addField('Created:', create)
            .addField("Boost", `Boosts: **${boostCount}**\nBoost Level: **${boostLevel}**`)
            .addField('Member', `Members: **${memberCount}**\nHumans: **${humanCount}**\nBots: **${botCount}**\nOnline: **${onlineMembers}**, DND: **${dndMembers}**, Idle: **${idleMembers}**, Offline: **${offlineMembers}**`)
            .addField('Channel Information', ` Text Channels: **${textChannelCount}**\n Voice: **${voiceChannelCount}**\n News: **${newsChannelCount}**\n Categories: **${categoryCount}**`)
            .addField('Information', `Verification Level: **${message.guild.verificationLevel}**\n Region: **${message.guild.region}**\n Roles: **${message.guild.roles.cache.size}**`)
        await message.channel.send(embed)
    }
}