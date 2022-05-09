const client = require("../../index.js");
const Discord = require(`discord.js`)
const owner = ["396540876630917140"];

module.exports = {
    name: "role-",
    description: "Remove a role from a user.",
    category: "Owner",
    aliases: [""],

    run: async (client, message, arguments) => {

        if (message.author.id != owner) {
            return message.channel.send("Sorry, the `role-` command can only be executed by the Bot Developer.")
          }

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

        if (member.roles.cache.get(role.id)) {
            member.roles.remove(role)
            message.channel.send(`Removed the role **${roleName}** from ${targetMember}`)
        } else {
            message.channel.send(`The user ${targetMember} does not have the **${roleName}** role`)
        }
    },
}
