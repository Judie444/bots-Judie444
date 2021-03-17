const Discord = require('discord.js'),
    replies = ['Voici votre Lait ^^', 'Et un verre de Lait !', 'Bon Appétit', 'Voici votre commande ^^']
    imageslait = ['https://i.pinimg.com/236x/4d/9a/7f/4d9a7f36f62df3dd50d4b19dbcb68013.jpg', 'https://i.pinimg.com/236x/99/7d/86/997d86b2020ee6573e77c2ca14b5366b.jpg', 'https://i.pinimg.com/236x/d8/7c/1c/d87c1c69109a38bdc5cdfd971b3c0867.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!lait stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imageslait[Math.floor(Math.random() * imageslait.length)]))
    },
    name: 'lait'
}