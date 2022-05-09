const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  aliases: [" "],
  description: "There is a big chance I insult you!",
  category: "Fun",
  run: async (bot, message, args) => {
    const question = args.join(' ');
          if (!question) return message.channel.send('Please provide a question!');
            const embed = new MessageEmbed()
              .setTitle('8-Ball')
              .addField('Question', question)
              .addField('Answer', `${answers[Math.floor(Math.random() * answers.length)]}`)
              .setColor("BLACK");
            message.channel.send(embed);
        }
};
		const answers = [
       'Maybe.',
	'Certainly not.',
	'I hope so.',
	'Not in your wildest dreams.',
	'There is a good chance.',
	'Quite likely.',
	'I think so.',
	'I hope not.',
	'I hope so.',
	'Never!',
	'Ahaha! Really?!?',
	'Pfft.',
	'Sorry, bucko.',
	'Hell, yes.',
	'Hell to the no.',
	'The future is bleak.',
	'The future is uncertain.',
	'I would rather not say.',
	'Who cares?',
	'Possibly.',
	'Never, ever, ever.',
	'There is a small chance.',
	'Yes!',
	'It is certain.',
    'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
		]
