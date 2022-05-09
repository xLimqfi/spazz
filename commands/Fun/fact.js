const { MessageEmbed } = require('discord.js');
const Random = require("srod-v2");

module.exports = {
    name: 'fact',
    category: 'Fun',
    description: 'Get some random facts',
    aliases: [''],
    run: async(bot, message, args) => {
       let data = await Random.GetFact();
       message.channel.send(data);
    }
};