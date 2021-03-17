const Discord = require('discord.js'),
    replies = ['Voici votre Monster ^^', 'Et une Monster !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesmonster = ['https://i.pinimg.com/236x/9a/3a/24/9a3a24f02265ba58a7da74ad78415a5d.jpg', 'https://i.pinimg.com/236x/0d/34/51/0d34518f3e6ae37ffca11c32de1b0f9a.jpg', 'https://i.pinimg.com/236x/46/ef/a1/46efa1880038cab230e490dae01852a6.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!monster stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesmonster[Math.floor(Math.random() * imagesmonster.length)]))
    },
    name: 'monster'
}