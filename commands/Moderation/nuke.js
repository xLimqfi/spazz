const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const errors = require('../../resources/err');
const utils = require('../../resources/nukeutil');


module.exports = {
    name: "nuke",
    description: "Clear a specific amount of messages.",
    category: "Moderation",
    usage: "nuke",
    aliases: [""],

    run: async (client, message, args) => {

        const urls = [
            "https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif",
            "https://media.giphy.com/media/hvGKQL8lasDvIlWRBC/giphy.gif",
            "https://media.giphy.com/media/X92pmIty2ZJp6/giphy.gif",
            "https://media.giphy.com/media/XrNry0aqYWEhi/giphy.gif",
            "https://media.giphy.com/media/FC4WzgUnsT57i/giphy.gif",
            "https://media.giphy.com/media/XevXoNu5WZxe0/giphy.gif",
            "https://media.giphy.com/media/fVzdQ7TK7hO5ViB2Pp/giphy.gif",
            "https://media.giphy.com/media/lT4Ix992z2zfO/giphy.gif"
        ];

        const messages = [
            "Channel Cleared"
        ];

        const link = urls[Math.floor(Math.random() * urls.length)];
        const title = messages[Math.floor(Math.random() * messages.length)];

        if(!message.member.hasPermission("ADMINISTRATOR")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**NUKE**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );

        const conditionEmbed = new Discord.MessageEmbed()
            .setTitle('Please confirm')
            .setDescription(`Are you sure you want to nuke this channel? There's no going back!`)
            .setColor("#fff")

        await message.channel.send(conditionEmbed).then(async msg => {

            const filter = (reaction, user) => {
                return ["✅", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            await msg.react("✅");
            await msg.react("❌");

            msg.awaitReactions(filter, {max: 1, time: 15000, errors: ["time"]})

                .then(async collected => {

                    const reaction = collected.first();

                    if (reaction.emoji.name === "✅") {

                        await message.channel.clone().then(async (ch) => {
                            await ch.setParent(message.channel.parent.id);
                            ch.setPosition(message.channel.position);
                            await message.channel.delete();
                            const embed = new Discord.MessageEmbed()
                                .setTitle(title)
                                .setImage(link)
                                .setColor("fff")
                            await ch.send(embed)
                        });

                    } else {

                        await msg.delete();
                        return utils.sendError("Nuke cancelled", message);
                    }
                })
                .catch(collected => {
                    return utils.sendError("You did not react with the correct emojis.", message);
                });
        });
    }
}