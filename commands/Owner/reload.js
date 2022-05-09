const owner = ["396540876630917140"];
module.exports = {
    name: "reload",
    category: "Owner",
    description: "Reload command",
    run: async (client, message, args) => {
        if (message.author.id != owner) {
            return message.channel.send("Sorry, the `reload` command can only be executed by the Bot Developer.")
          }
      if (!args[0]) return message.channel.send('Give a command');
      let command = args[0].toLowerCase();
      var commandinfo = client.commands.get(command);
      var category = commandinfo.category

      try {
          delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)];
          client.commands.delete(command);

        const pull = require(`../../commands/${category}/${command}.js`);
        client.commands.set(command, pull);
        return message.channel.send(`Reloaded **${command}**`);
      } catch (error) {
        return message.channel.send(`Error reloading **${command}**: \`${error.message}\``)
      }
    }
  }
