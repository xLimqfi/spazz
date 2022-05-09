const Discord = require('discord.js');

module.exports = {
    name: "mute",
    description: "Mutes a member.",
    category: "Moderation",
    aliases: [""],
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**MUTE**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send(`I dont have permissions to mute`);
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.reply('Please specify a user.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        color: "RED",
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                console.log(error)
                message.channel.send(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} has Been Muted.`)
    }
}
