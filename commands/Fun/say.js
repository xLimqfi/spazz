module.exports = {
    name: "say",
    description: "Make the bot say your message",
    category: "Fun",
    run: async (client, message, args) => {
      if (!args.join(" ")) {
        message.channel.send("Please provide a text for me to repeat!");
      }
      message.channel.send(args.join(" "), {
        allowedMentions: { parse: ["users"] },
      });
      message.delete();
    },
  };