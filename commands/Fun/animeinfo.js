const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  category: "Fun",
description: "Get info about an anime",
run: async (client, message, args) => {
  const state = "disabled";
    if (state === "disabled") {
      return message.channel.send("The Command has Been Disabled!");
    }
        const search = `${args}`;
        if(!search)
        return message.reply('Please give me a valid anime name!');

        malScraper.getInfoFromName(search)
          .then((data) => {
          const embed = new Discord.MessageEmbed()
            .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
            .setThumbnail(data.picture)
            .setColor('#ffc1cc') //I personally use bubblegum pink!
            .addField('English Title', data.englishTitle, true)
            .addField('Japanese Title', data.japaneseTitle, true)
            .addField('Type', data.type, true)
            .addField('Episodes', data.episodes, true)
            .addField('Rating', data.rating, true)
            .addField('Aired', data.aired, true)
            .addField('Score', data.score, true)
            .addField('Score Stats', data.scoreStats, true)
            .addField('Link', data.url);

            message.channel.send(embed);

          })
}
};