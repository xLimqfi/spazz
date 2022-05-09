const { MessageEmbed } = require("discord.js");
const message = require("discord.js");
const { create } = require("sourcebin");
module.exports = {
  name: "create-bin",
  description: "Make a bin from your javascript code!",
  category: "Utility",
  run: async (client, message, args) => {
    const content = args.join(" ");
    if (!content)
      return message.channel.send({
        content:
          "Please provide a text to make a bin of!",
      });

    create(
      [
        {
          name: `Code by ${message.author.tag}`,
          content,
          language: "javascript",
        },
      ],
      {
        title: "Code",
      }
    ).then((value) => {
      message.channel.send(
        `I have created  a bin for javascript: ${value.url}`
      );
    });
  },
};