const { MessageEmbed } = require('discord.js');
const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';
const https = require('https');
module.exports = {
        name: "meme",
        aliases: [],
        category: "Fun",
        description: "Shows a meme",
    run: async (bot, message, args) => {
       https.get(url, result => {
            let body = '';
            result.on('data', chunk => {
                body += chunk;
            });

        result.on('end', () => {
            const response = JSON.parse(body);
            const index = response.data.children[Math.floor(Math.random() * 99) + 1].data;
            const image = index.preview.images[0].source.url.replace('&amp;', '&');
            const { title } = index;
            const link = `https://reddit.com${index.permalink}`;

            const imageMeme = new MessageEmbed()
                .setTitle('Meme')
                .setDescription(`[${title}](${link})`)
                .setImage(image)
                .setColor(`#fff`);
            message.channel.send(imageMeme);

        
             
            });
        });
    }
};