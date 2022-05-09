const { MessageEmbed } = require("discord.js");
const translate = require("@iamtraction/google-translate");

module.exports = {
  name: "translate",
  description: "Translate given text!",
  category: "Utility",
  run: async (client, message, args) => {
    const query = args.join(" ");
    if (!query)
      return message.channel.send({
        content: "Please provide a text to translate!",
      });

    const translated = await translate(query, { to: "en" });
    const embed = new MessageEmbed()
      .setFooter(`${message.author.tag}`)
      .addField("Text To Translate:", `\`\`\`${args.join(" ")}\`\`\``)
      .addField("Translateted Text:", `\`\`\`${translated.text}\`\`\``)
      .setColor("#303136");
    message.channel.send(embed);
  },
};