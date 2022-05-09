const { MessageEmbed } = require('discord.js');
const owner = ["396540876630917140"];



module.exports = {
    name: 'botnick',
    description: 'Change bot\'s nickname in the current server',
    category: "Owner",
    run: async(client, message, args) => {
        if (message.author.id != owner) {
            return message.channel.send("Sorry, the `botnick` command can only be executed by the Bot Developer.")
          }
            const bot = message.guild.member(message.client.user);

            const nickname = args.join(' ');
                if (!nickname) return message.channel.send('Error: Please provide a valid username.');

            if (nickname.length <= '32') {
                const embed = new MessageEmbed()
                    .setTitle('Bot Nickname')
                    .setDescription(`Nickname successfully changed to **${nickname}**`)
                    .setTimestamp()
                    .setColor("BLACK");

                bot.setNickname(nickname).then(message.channel.send(embed));
            }
            else {
                return message.channel.send('Error: Nickname must be 32 characters or fewer.');
            }
        }
};
