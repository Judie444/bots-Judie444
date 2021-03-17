const Discord = require('discord.js'),
    replies = ['Voici votre Café ^^', 'Et un Café !', 'Bon Appétit', 'Voici votre commande ^^']
    imagescafe = ['https://i.pinimg.com/236x/fa/02/cf/fa02cf1fa878a200b2726b89070f2a03.jpg', 'https://i.pinimg.com/236x/01/6a/33/016a3372283916a4e84a41a7dd80f1f5.jpg', 'https://i.pinimg.com/236x/a9/0c/8a/a90c8a7a46b84f921c9e50d78de24121.jpg', 'https://i.pinimg.com/236x/be/05/67/be0567a2553d092c2e3de74e26445a12.jpg', 'https://i.pinimg.com/236x/a3/17/08/a317085b479e7cdff35a3c69f0d57b02.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!cafe stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagescafe[Math.floor(Math.random() * imagescafe.length)]))
    },
    name: 'cafe'
}