const Discord = require('discord.js');


async function emoji(id) {
    return client.emojis.cache.get(id).toString();
}

async function sendSuccess(string, message) {
    const embed = new Discord.MessageEmbed()
    embed.setTitle(`${string}`)
    embed.setColor("#fff")
    return await message.channel.send(embed);
}

async function sendError(string, message) {
    const embed = new Discord.MessageEmbed()
        .setTitle(`${string}`)
        .setColor("#fff")
    return await message.channel.send(embed);
}

module.exports = {
    sendSuccess, sendError
}