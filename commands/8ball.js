const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut être', 'Evidemment']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send('Veuillez indiquer une formule de polittesse : stp.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: '8ball'
}