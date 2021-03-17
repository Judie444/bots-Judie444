const Discord = require('discord.js'),
    replies = ['Voici votre Jus de Raisin ^^', 'Et un Jus de Raisin !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesjusraisin = ['https://i.pinimg.com/236x/9f/05/0a/9f050a97908b7053ab7dc6b9ab91fc62.jpg', 'https://i.pinimg.com/236x/5e/39/88/5e3988997c34319bd2e05ca383ed9752.jpg', 'https://i.pinimg.com/236x/dd/a5/18/dda518a8d33d63bf8b8c165efb9265a8.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!jus-raisin stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesjusraisin[Math.floor(Math.random() * imagesjusraisin.length)]))
    },
    name: 'jus-raisin'
}