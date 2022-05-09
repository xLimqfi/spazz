const Discord = module.require("discord.js");

module.exports = {
  name: "rip",
  description: "R.I.P. Any user",
  category: "Fun",
  run: async (client, message, args) => {
    const state = "enable";
    if (state === "disabled") {
      return message.channel.send("The Command has Been Disabled!");
    }
    const mention = message.mentions.members.first();
    if (!mention) {
      return message.channel.send("Please specify a member you want to R.I.P!");
    }

    message.channel.send({
      files: [
        {
          attachment: `https://vacefron.nl/api/grave?user=${mention.user.avatarURL()}`,
          name: "rip.png",
        },
      ],
    });
  },
};