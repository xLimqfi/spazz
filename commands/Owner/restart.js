const owner = ["396540876630917140"];
const { MessageEmbed } = require('discord.js');
module.exports = {
        name: "restart",
        aliases: [``],
        category: "Owner",
        description: "Restarts the bot",
    run: async (bot, message, args) => {
       if(message.author.id != owner) return message.channel.send("Sorry, the `restart` command can only be executed by the Bot Developer.")

        try {
            message.channel.send("Attempting to restart...").then(msg => {
              setTimeout(function(){
                 msg.edit("**Restarted!**");
              }, 10000);
            })
            .then(bot.destroy())
            .then(bot.login(''))




              } catch(e) {
                message.channel.send(`ERROR: ${e.message}`)

        }
      }}
