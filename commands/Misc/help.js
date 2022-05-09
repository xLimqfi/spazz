const { MessageEmbed } = require('discord.js');
const paginationEmbed = require('discord.js-pagination');


module.exports = {
    name: 'help',
    aliases: [],
    category: 'Misc',
    description: 'Help command',

    run: async(client, message, args) => {
        if (!args[0]) {

            const Misc = message.client.commands.filter(x => x.category == 'Misc').map((x) => '`' + x.name + '`').join(', ');
            const Moderation = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`' + x.name + '`').join(', ');
            const Fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(', ');
            const Ticket = message.client.commands.filter(x => x.category == 'Ticket').map((x) => '`' + x.name + '`').join(', ');
            const Utility = message.client.commands.filter(x => x.category == 'Utility').map((x) => '`' + x.name + '`').join(', ');
            const Owner = message.client.commands.filter(x => x.category == 'Owner').map((x) => '`' + x.name + '`').join(', ');
            const Images = message.client.commands.filter(x => x.category == 'Images').map((x) => '`' + x.name + '`').join(', ');

            const embed1 = new MessageEmbed()
            .setTitle('Help Panel')
            .addField('Fun', Fun)
            .setThumbnail(`https://cdn.discordapp.com/attachments/970901079229341726/970901152822591518/Vezzra_gaming2.0_1.png`)
            .setColor("RED")
            .setTimestamp()

            const embed2 = new MessageEmbed()
            .setTitle('Help Panel')
            .addField('Images', Images)
            .setThumbnail(`https://cdn.discordapp.com/attachments/970901079229341726/970901152822591518/Vezzra_gaming2.0_1.png`)
            .setColor("RED")
            .setTimestamp()

            const embed3 = new MessageEmbed()
            .setTitle('Help Panel')
            .addField('Misc', Misc)
            .setThumbnail(`https://cdn.discordapp.com/attachments/970901079229341726/970901152822591518/Vezzra_gaming2.0_1.png`)
            .setColor("RED")
            .setTimestamp()

            const embed4 = new MessageEmbed()
            .setTitle('Help Panel')
            .addField('Utility', Utility)
            .setThumbnail(`https://cdn.discordapp.com/attachments/970901079229341726/970901152822591518/Vezzra_gaming2.0_1.png`)
            .setColor("RED")
            .setTimestamp()

            const embed5 = new MessageEmbed()
            .setTitle('Help Panel')
            .addField('Moderation', Moderation)
            .setThumbnail(`https://cdn.discordapp.com/attachments/970901079229341726/970901152822591518/Vezzra_gaming2.0_1.png`)
            .setColor("RED")
            .setTimestamp()

            const embed6 = new MessageEmbed()
            .setTitle('Help Panel')
            .addField('Ticket', Ticket)
            .setThumbnail(`https://cdn.discordapp.com/attachments/970901079229341726/970901152822591518/Vezzra_gaming2.0_1.png`)
            .setColor("RED")
            .setTimestamp()

            const embed7 = new MessageEmbed()
            .setTitle('Help Panel')
            .addField('Owner', Owner)
            .setThumbnail(`https://cdn.discordapp.com/attachments/970901079229341726/970901152822591518/Vezzra_gaming2.0_1.png`)
            .setColor("RED")
            .setTimestamp()






            emojiList = ['⏪', '⏩']

            timeout = 320000;

            pages = [
                embed1,
                embed2,
                embed3,
                embed4,
                embed5,
                embed6,
                embed7
            ];

            paginationEmbed(message, pages, emojiList, timeout);

        }
 },
}
