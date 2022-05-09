const Discord = module.require("discord.js");

module.exports = {
  name: "yomama",
  description: "Add Yo Mama Before your message",
  category: "Images",
  run: async (client, message, args) => {
    let ymm = args.join(" ");
    if (!ymm) {
      return message.channel.send("Please provide a text!");
    }
    message.channel.send(`Yo mama ${ymm}`);
  },
};