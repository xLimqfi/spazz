const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'covid',
    category: "Fun",
    aliases: ["covid19", "Covid19", "coronavirus", "COVID19"],
    description: "Covid19 search",
    run: async(client, message, args) => {
		 const countries = args.join(" ");
         if(!countries) return message.channel.send(`Give me a country's name.`)
         const url = `https://corona.lmao.ninja/v2/countries/${countries}`
         let response
           try{
               response = await fetch(url).then(res => res.json())
           }
           catch(e) {
               return message.reply('An Error Occured, Try Again Later.')
           }
           const embed = new MessageEmbed()
           .setTitle(`COVID-19 Stats for **${response.country}**`)
           .setColor(`#e7f0e1`)
           .setThumbnail(response.countryInfo.flag)
           .addField('Total Cases', response.cases.toLocaleString())
           .addField('Total Deaths', response.deaths.toLocaleString())
           .addField('Total Recovered', response.recovered.toLocaleString())
           .addField('Active Cases', response.active.toLocaleString())
           .addField('Critical Cases', response.critical.toLocaleString())
           .addField('Todays Deaths', response.todayDeaths.toLocaleString())
           .addField('Today Recoveries', response.todayRecovered.toLocaleString())
           message.channel.send(embed)
       }
}