const Discord = require('discord.js'),
    replies = ['Voici votre Gaufre ^^', 'Et une Gaufre !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesgaufresucre = ['https://i.pinimg.com/564x/7f/89/c1/7f89c1d603ce3fe7f85cdef7c26f1671.jpg', 'https://i.pinimg.com/236x/94/28/98/94289803c2c6e81489c4667bcf8c5580.jpg', 'https://i.pinimg.com/236x/35/a3/9d/35a39deaabba606d2e982c43368065bf.jpg', 'https://i.pinimg.com/236x/ef/9b/63/ef9b635116340235d9ed4bb8afd1b21c.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!gaufre-au-sucre stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesgaufresucre[Math.floor(Math.random() * imagesgaufresucre.length)]))
    },
    name: 'gaufre-au-sucre'
}