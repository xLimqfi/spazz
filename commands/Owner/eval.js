const { MessageEmbed } = require("discord.js");
const owner = ["396540876630917140"];

module.exports = {
  name: "eval",
  aliases: ["eval", "evaluate"],
  description: "Run A Whole Code With This Command!",
  category: "Owner",
  usage: "eval <code>",

  run: async(client, message, args) => {
    //Eval Command(Not to be made public btw!)
    if (message.author.id != owner) {
      return message.channel.send("Sorry, the `eval` command can only be executed by the Bot Developer.")
    }
      try {
        const code = args.join(" ");
        if (!code) {
           return message.channel.send("What do you want to evaluate?")
        }

        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

          let embed = new MessageEmbed()
          .setAuthor("Eval", message.author.avatarURL())
          .addField("Input", `\`\`\`${code}\`\`\``)
          .addField("Output", `\`\`\`${evaled}\`\`\``)
          .setColor("BLACK")

        message.channel.send(embed);
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`\n${err}\`\`\``);
    }
  }
}
