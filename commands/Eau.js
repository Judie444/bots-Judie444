const Discord = require('discord.js'),
    replies = ['Voici votre Eau ^^', 'Et un peu d\'eau !', 'Bon Appétit', 'Voici votre commande ^^']
    imageseau = ['https://i.pinimg.com/236x/b9/6c/70/b96c700ecad0eb52881d9858ed8d8f32.jpg', 'https://i.pinimg.com/236x/92/f1/b6/92f1b689614252e1a07b8635d7e8f6bc.jpg', 'https://i.pinimg.com/236x/af/7c/d5/af7cd50d06fe1b70ce021c9ccf3b9694.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!eau stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imageseau[Math.floor(Math.random() * imageseau.length)]))
    },
    name: 'eau'
}