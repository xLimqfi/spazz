const { MessageEmbed } = require('discord.js');

const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pat',
    aliases: [""],
    category: 'Images',
    description: 'Pat someone',

   run: async(client, message, args) => {
    const member = message.mentions.members.first()
    if(!member) return message.channel.send('Please specify a member you want to pat')
    if(member.id == message.author.id) return message.channel.send('<a:no:971654133239123969> You can\'t pat yourself!')
    if(member.bot) return message.channel.send('<a:no:971654133239123969> You can\'t pat bots.')
    const pat = await neko.sfw.pat();
    const embed = new MessageEmbed()
        .setDescription(`<@${message.author.id}> patted <@${member.id}>`)
        .setImage(pat.url)
        .setColor(`#c70c88`)
    message.channel.send(embed);
    }
    }
