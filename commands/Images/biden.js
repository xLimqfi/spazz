const Discord = require('discord.js');

module.exports = {
  name: 'biden',
  category: "Images",
  description: 'Get a custom clyde message!',
  run: async(client, message, args) => {
    if (!args[0]) {
      return message.channel.send('Please provide a text!')
    }
    let bidenMessage = args.slice(0).join(' ');
    if (bidenMessage.length > 65) return message.channel.send('<a:no:971654133239123969> **You Are Not Allowed To Go Over 65 Characters!**');

    message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/biden?text=${bidenMessage}`, name: 'reaperbiden.jpg' }] });
  }
}
