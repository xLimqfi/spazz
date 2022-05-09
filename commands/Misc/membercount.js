const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "membercount",
    description: "Check the member count of the server",
    category: "Misc",
    aliases: ["mbc"],

    
    run: async (bot, message, args) => {
        const embed = new MessageEmbed()
        .setTitle(`__**Sever Name**__: ${message.guild.name}`)
        .setColor("#303136")
        .setDescription(`The total number of members of this server is: ${message.guild.memberCount}`);
      message.channel.send(embed);
    },
  };