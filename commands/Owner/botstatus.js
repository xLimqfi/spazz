const { MessageEmbed } = require('discord.js');
const owner = ["396540876630917140"];

module.exports = {
    name: 'botstatus',
    description: 'Change bot\'s current status globally',
    category: "Owner",
    run: async (client, message, args) => {
        const setStatus = message.content.split(' ');

        if (message.author.id != owner) {
            return message.channel.send("Sorry, the `botstatus` command can only be executed by the Bot Developer.")
          }

        else if (setStatus[1] === 'online') {
            const embedOnline = new MessageEmbed()
                .setTitle('Bot Status')
                .setDescription('Status successfully changed to **Online**')
                .setTimestamp()
                .setColor("BLACK");
            message.client.user.setStatus('online').then(message.channel.send(embedOnline));
        }

        else if (setStatus[1] === 'idle') {
            const embedIdle = new MessageEmbed()
                .setTitle('Bot Status')
                .setDescription('Status successfully changed to **Idle**')
                .setTimestamp()
                .setColor("BLACK");
            message.client.user.setStatus('idle').then(message.channel.send(embedIdle));
        }

        else if (setStatus[1] === 'dnd') {
            const embedDnd = new MessageEmbed()
                .setTitle('Bot Status')
                .setDescription('Status successfully changed to **Do Not Disturb**')
                .setTimestamp()
                .setColor("BLACK");
            message.client.user.setStatus('dnd').then(message.channel.send(embedDnd));
        }

        else if (setStatus[1] === 'invisible') {
            const embedInvisible = new MessageEmbed()
                .setTitle('Bot Status')
                .setDescription('Status successfully changed to **Invisible**')
                .setTimestamp()
                .setColor("BLACK");
            message.client.user.setStatus('invisible').then(message.channel.send(embedInvisible));
        }

        else {
            return message.channel.send('Error: Please provide a valid status.');
        }
    }
};
