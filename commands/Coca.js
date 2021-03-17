const Discord = require('discord.js'),
    replies = ['Voici votre Coca ^^', 'Et un Coca !', 'Bon Appétit', 'Voici votre commande ^^']
    imagescoca = ['https://i.pinimg.com/236x/4c/63/d1/4c63d15d3acbb0086cab62f566cca9e3.jpg', 'https://i.pinimg.com/236x/6e/dd/fd/6eddfd3787c66c3cad5ce0febfcdb366.jpg', 'https://i.pinimg.com/236x/81/cf/96/81cf9632e446d0bf575d9219bc6f8b15.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!coca stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagescoca[Math.floor(Math.random() * imagescoca.length)]))
    },
    name: 'coca'
}