const { MessageEmbed } = require('discord.js');
const Random = require("srod-v2");

module.exports = {
    name: 'changemymind',
    category: 'Images',
    description: 'Change your mind',
    aliases: ['chm'],
    run: async(bot, message, args) => {

        let change = args[0];
    if (!change) return message.channel.send("<a:no:971654133239123969> Please provide a text!");

    let data = await Random.ChangeMyMind({ Message: change });

    message.channel.send(data);
    }
};
