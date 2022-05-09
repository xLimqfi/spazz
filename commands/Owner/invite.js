const { MessageEmbed } = require("discord.js");
const owner = ["396540876630917140"];

module.exports = {
  name: `invite`,
  description: "Gives you invite link of bot!",
  category: "Owner",
  run: async (bot, message, args) => {
    if (message.author.id != owner) {
      return message.channel.send("Sorry, the `invite` command can only be executed by the Bot Developer.")
    }
    const embed = new MessageEmbed()
      .setFooter(`Executed by ${message.author.tag}`)
      .setTimestamp()
      .setColor("#303136")
      .setDescription(
        "[Click Here to Invite me](https://discord.com/api/oauth2/authorize?client_id=884482065985327114&permissions=8&scope=bot%20applications.commands)"
      );
    message.channel.send(embed);
  },
};
