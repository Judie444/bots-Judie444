const Discord = require('discord.js'),
    replies = ['Voici votre Sandwich ^^', 'Et un Sandwich !', 'Bon Appétit', 'Voici votre commande ^^']
    imagessandwich = ['https://i.pinimg.com/236x/f6/48/4e/f6484e776b8a5418c72ae8c1f43d5e2d.jpg', 'https://i.pinimg.com/236x/80/a3/84/80a3846ad72f407b6f155e1c92bf3065.jpg', 'https://i.pinimg.com/564x/a4/f4/28/a4f4289f9c206d6d990cf9f947f79c26.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!sandwich stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagessandwich[Math.floor(Math.random() * imagessandwich.length)]))
    },
    name: 'sandwich'
}