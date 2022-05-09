const { MessageEmbed } = require('discord.js');
const owner = ["723415139348381777"];

module.exports = {
    name: "n64",
    aliases: ["devilishcat"],
    description: "Devilish cat is a fucking bitch",
    category: "Fun",
    
    run: async(client, message, args) => {
      if (message.author.id != owner) {
        return message.channel.send("Sorry, the `n64` command can only be executed by <@723415139348381777>")
      }
      var devilishcat = [
          "Is a karen"
        ];
        await message.channel.send(
          ` Devilishcat ${devilishcat[Math.floor(Math.random() * devilishcat.length)]}`
          );
        },
      };
