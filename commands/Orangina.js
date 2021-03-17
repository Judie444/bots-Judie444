const Discord = require('discord.js'),
    replies = ['Voici votre Orangina ^^', 'Et un Orangina !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesorangina = ['https://i.pinimg.com/236x/22/39/5b/22395bcb4d3749153f36d1c18ac02342.jpg', 'https://i.pinimg.com/236x/83/85/87/838587a2a7295067ac6819a12cf2e49d.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!orangina stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesorangina[Math.floor(Math.random() * imagesorangina.length)]))
    },
    name: 'orangina'
}