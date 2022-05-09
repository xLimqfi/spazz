const { MessageEmbed } = require('discord.js');
const Random = require("srod-v2")

module.exports = {
    name: 'advice',
    category: 'Fun',
    description: 'Get some random advice',
    aliases: [''],
    run: async(bot, message, args) => {
        
        const Data = await Random.GetAdvice();
        return message.channel.send(Data);
    }
};