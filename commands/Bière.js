const Discord = require('discord.js'),
    replies = ['Voici votre Bière ^^', 'Et une Bière !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesbiere = ['https://i.pinimg.com/236x/0c/a0/c4/0ca0c40c5ea13a0ddd2e3cf118a78e0f.jpg', 'https://i.pinimg.com/236x/db/1a/84/db1a84d570af242bb578a50adcb78fa0.jpg', 'https://i.pinimg.com/236x/72/33/9c/72339ca6258ee8bf1ddb669516ae7aa6.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!biere stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesbiere[Math.floor(Math.random() * imagesbiere.length)]))
    },
    name: 'biere'
}