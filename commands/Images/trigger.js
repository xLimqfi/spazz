const { MessageAttachment } = require('discord.js');

module.exports = {
  name: "trigger",
  description: "Put the Triggered Overlay pic over avatars!",
  category: "Images",
  run: async (client, message, args) => {
    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!target) {
            let link = `https://some-random-api.ml/canvas/triggered/?avatar=${message.author.avatarURL({ format: 'png' })}`;
            let attachment = new MessageAttachment(link, 'triggered.gif');
            message.channel.send(attachment);
        } else {
            let link = `https://some-random-api.ml/canvas/triggered/?avatar=${target.user.avatarURL({ format: 'png' })}`;
            let attachment = new MessageAttachment(link, 'triggered.gif');
            message.channel.send(attachment);
        }
    }
}