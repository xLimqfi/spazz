const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "dogfact",
    category: "Fun",
    aliases: ["df"],
    description: "Sends a random dog fact !!",
    run: async (bot, message, args) => {

    const res = await fetch('https://some-random-api.ml/facts/dog');
    const fact = (await res.json()).fact;

    const embed = new Discord.MessageEmbed()
    .setTitle(`Dog Fact`)
    .setDescription(`\`\`\`${fact}\`\`\``)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}