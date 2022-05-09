const discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
const client = new discord.Client();
const botConfig = require("./config/bot.json");
const {Collection, Client} = require("discord.js");
const { badwords } = require('./config');
const { links } = require('./config');
const fs = require('fs');

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.events = new discord.Collection();

['command', 'event'].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

client.snipes = new Collection();

client.on('message', (message) => {
  if(message.content === '') {
      return;
  }
  if(badwords.some(word => message.content.toLocaleLowerCase().includes(word) )){
      message.delete();
      message.channel.send({embed: {
        title: `This word is forbidden`,
        description: `<@${message.author.id}> the word you send is banned from this guild!`,
        color: "BLACK",
        timestamp: new Date(),
      }
      })
  }
});

client.on('message', (message) => {
  if(message.content === 'https://discord.gg/Spaz') {
      return;
  }
  if(links.some(word => message.content.toLocaleLowerCase().includes(word) )){
      message.delete();
      message.channel.send({embed: {
        title: `Links are prohibited`,
        description: `Link send by: <@${message.author.id}>!`,
        color: "BLACK",
        timestamp: new Date(),

      }
      })
  }
});



client.on('message', (message) => {
  if (message.mentions.has(client.user)) {
    const embed = new MessageEmbed()
              .setTitle("SpazAttack")
              .setColor("RED")
              .setDescription(`${message.author}!\nSpazAttacks bot prefix is \`$\` Type \`$help\` for a list of commands.`)
              .addField('**Server Invite:**', `.gg/Spaz`)
              .addField('**Apply Here:**', `<#970562565308579850>`)
              .addField('**Guidelines channel:**', `<#970545267113865257>`)
              .addField('**Boost Rewards:**', `<#970545834162794507>`)
              .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
              .setTimestamp()

              return message.channel.send(embed);
          }
  });

  client.once('ready', () => {
    console.log(`User : ${client.user.tag}\nTotal : ${client.users.cache.size} users, ${client.channels.cache.size} channels, ${client.guilds.cache.size} guilds`);
    client.user.setActivity("SPAZZIN OUT", {
      type: "PLAYING",
    });
  });
client.login(botConfig.token);
