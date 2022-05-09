const Discord = require("discord.js");
const client = require("../index.js");

async function missingPermissions(permissions, message) {
    const embed = new Discord.MessageEmbed()
    embed.setTitle("You do not have the correct permissions.")
    embed.setColor("#fff")
    embed.setDescription(`You need: \`${permissions}\`.`)
    embed.setFooter('Gin', client.user.displayAvatarURL({dynamic: true}))
    embed.setTimestamp()
    await message.channel.send(embed)
}

async function missingBotPermissions(permissions, message) {
    const embed = new Discord.MessageEmbed()
    embed.setTitle("I do not have the correct permissions.")
    embed.setColor("#fff")
    embed.setDescription(`I need: \`${permissions}\`.`)
    embed.setFooter('Gin', client.user.displayAvatarURL({dynamic: true}))
    embed.setTimestamp()
    await message.channel.send(embed)
}


module.exports = {
    missingPermissions,
    missingBotPermissions,
}