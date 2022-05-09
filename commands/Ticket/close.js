/* eslint-disable no-unused-vars */
const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'close',
	category: 'Ticket',
	description: 'Closes the ticket.',
	aliases: [],
	usage: 'close',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Chat transcript for ${message.channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return message.channel.send('An error occurred, please try again!');
					}

					const embed = new MessageEmbed()
						.setDescription(`[\`📄 View\`](${response.url})`)
						.setColor('GREEN');
					member.send('Here is a transcript of your ticket, please click the link below to view the transcript', embed);
				}).then(() => {
					try {
						message.channel.updateOverwrite(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`<a:yes:971654133193011230> Successfully closed ${message.channel}`);
						});
					}
					catch(e) {
						return message.channel.send('<a:no:971654133239123969> An error occurred, please try again!');
					}
				});
			}
		}
		else {
			return message.reply('<a:no:971654133239123969> Please use this command when youre closing a ticket.');
		}
	},
};
