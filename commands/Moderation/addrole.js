const client = require("../../index.js");
const Discord = require(`discord.js`)

module.exports = {
    name: "addrole",
    description: "Add a role to a user.",
    category: "Moderation",
    aliases: [],

    run: async (client, message, arguments) => {

        if(!message.member.hasPermission("MANAGE_ROLES")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**ADD ROLE**")
        .setColor("BLACK")
        .setDescription("```You don't have permission to run this command```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    );

        const targetUser = message.mentions.users.first()
        if (!targetUser) {
            message.channel.send('Please mention a user')
            return
        }

        arguments.shift()

        const roleName = arguments.join(' ')
        const { guild } = message

        let targetMember = message.mentions.members.first();

        const role = guild.roles.cache.find((role) => {
          return role.name === roleName
        })
        if (!role) {
            message.channel.send(`There is no role with the name **${roleName}**`)
            return
        }

        const member = guild.members.cache.get(targetUser.id)
        member.roles.add(role)

        message.channel.send(`Gave ${targetMember} the **${roleName}** role`)
    },
}