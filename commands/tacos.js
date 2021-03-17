const Discord = require('discord.js'),
    replies = ['Voici votre Tacos ^^', 'Et un Tacos !', 'Bon Appétit', 'Voici votre commande ^^']
    imagestacos = ['https://i.pinimg.com/236x/7d/d2/21/7dd22122e0072fe330203acc8db3bf48.jpg', 'https://i.pinimg.com/236x/17/ed/8a/17ed8a55f68a76a9d9a4d7410c2e0013.jpg', 'https://i.pinimg.com/236x/9a/4c/a2/9a4ca2e53dca72447b06b3dc9ea279dd.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!tacos stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagestacos[Math.floor(Math.random() * imagestacos.length)]))
    },
    name: 'tacos'
}