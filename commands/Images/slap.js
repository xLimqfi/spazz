const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'slap',
    aliases: [],
    category: 'Images',
    description: 'Slap someone',

    run: async(client, message, args) => {

        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Please specify a member you want to slap')
        if(member.id == message.author.id) return message.channel.send('<a:no:971654133239123969> You can\'t slap yourself!')
        if(member.bot) return message.channel.send('<a:no:971654133239123969> You can\'t slap bots.')
    const slap = await neko.sfw.slap();
    const embed = new MessageEmbed()
        .setDescription(`<@${message.author.id}> slapped <@${member.id}> :(`)
        .setImage(slap.url)
        .setColor(`#922706`)
    message.channel.send(embed);
    }
    }
