const Discord = require('discord.js'),
    replies = ['Voici votre Panini ^^', 'Et un Panini !', 'Bon Appétit', 'Voici votre commande ^^']
    imagespanini = ['https://i.pinimg.com/236x/89/9a/c3/899ac33fbb4616153c462ad6a3af5442.jpg', 'https://i.pinimg.com/236x/5b/b6/ad/5bb6adffcb60821c7a78e81c5918b742.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!panini stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagespanini[Math.floor(Math.random() * imagespanini.length)]))
    },
    name: 'panini'
}