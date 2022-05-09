const client = require("../../index.js");
const Discord = require('discord.js');

module.exports = {
    name: "unban",
    description: "Unban a member.",
    category: "Moderation",
    usage: `{member.id} {reason}`,
    aliases: ["pardon"],

    run: async (client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**UNBAN**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );
        if (!args[0]) return message.channel.reply('Please specify a user.').then(m => m.delete({timeout: 5000}));
        let member;
        try {
            member = await client.users.fetch(args[0]);
        } catch (err) {
            console.log(err)
            return message.channel.send('Invalid user.').then(m => m.delete({ timeout: 5000 }));
        }
        const reason = args[1] ? args.slice(1).join(' ') : "none";
        message.guild.fetchBans().then(async bans => {
            const user = bans.find(ban => ban.user.id === member.id);
            if (user) {
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${member.username} was unbanned.`)
                    .setColor("BLACK")
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed));
            } else {
                await errors.customError("That user is not banned.", message);
            }
        }).catch(e => {
            console.log(e)
            message.channel.send('An error has occurred.')
        });
    }
}
