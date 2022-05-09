const Discord = require('discord.js');

module.exports = {
  name: "clear",
  category: "Moderation",
  aliases: ["purge", "prune"],
  description: "to delete message",
  run: async(client, message, args) => {  
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Clear Messages**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );

  if(!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Clear Messages**")
        .setColor("BLACK")
        .setDescription("```Please enter the amount of message you wanna clear```")
        .addFields(
          {name: "```Uses```", value: "prefix+clear (No. of msg)", inline: true },
          {name: "```Example```", value: "$clear 10", inline: true }
        )
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    ) 

  if(isNaN(args[0])) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Clear Messages**")
        .setColor("BLACK")
        .setDescription("```Please enter real number```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    )
 
  if(args[0] > 100 )
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Clear Messages**")
        .setColor("BLACK")
        .setDescription("```You can't delete more than 100 message at once```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    )
  
  if(args[0] < 1 )
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Clear Messages**")
        .setColor("BLACK")
        .setDescription("```You must delete atleast one message```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    )

  await message.channel.messages.fetch({limit: args[0]}).then(messages => {
    message.channel.bulkDelete(messages)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Clear Messages**")
        .setColor("BLACK")
        .setDescription(`\`\`\`black\nDeleted ${args[0]} message from this channel.\n\`\`\``)
        .setFooter(`Executed by ${message.author.username} | This message will disappear in 10 second`, message.author.displayAvatarURL({dynamic: true}))
    ).then(message => {
      message.delete({timeout: 10000})
    })
  })  
 }
}
