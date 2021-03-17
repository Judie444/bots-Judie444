const Discord = require('discord.js'),
    replies = ['Voici votre Profiterole ^^', 'Et un Profiterole !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesprofiterole = ['https://i.pinimg.com/236x/d4/f3/a3/d4f3a384fada0a4d71cdf59d6d44fc3e.jpg', 'https://i.pinimg.com/236x/54/7c/83/547c83391be3e13e2a7d246e339897e8.jpg', 'https://i.pinimg.com/236x/f0/79/93/f0799341de2d94b40dd2b2f15d11d6bd.jpg', 'https://i.pinimg.com/236x/4f/fc/03/4ffc03addf810702a0c63fd7a252ae49.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!profiterole stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesprofiterole[Math.floor(Math.random() * imagesprofiterole.length)]))
    },
    name: 'profiterole'
}