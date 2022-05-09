const { MessageEmbed } = require('discord.js');


const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'kiss',
    aliases: [],
    category: 'Fun',
    description: 'Kiss someone.',

    run: async(client, message, args) => {
       
    
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Please specify a member you want to kiss')
        if(member.id == message.author.id) return message.channel.send('You can\'t kiss yourself!')
        if(member.bot) return message.channel.send('You can\'t kiss bots.')

    const kiss = await neko.sfw.kiss();
    const embed = new MessageEmbed()
        .setDescription(`Awww.. <@${message.author.id}> kissed <@${member.id}> So cute! <3`)
        .setImage(kiss.url)
        .setColor(`#ec13c8`)
    message.channel.send(embed);
    }
    }