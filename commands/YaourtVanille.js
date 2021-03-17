const Discord = require('discord.js'),
    replies = ['Voici votre Yaourt à la Vanille ^^', 'Et un Yaourt à la Vanille !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesyaourtvanille = ['https://i.pinimg.com/236x/fd/42/dc/fd42dc2ae39f270e5e0263cbad0a00c3.jpg', 'https://i.pinimg.com/236x/3f/1c/b3/3f1cb314932dd10a255f53f652ca619d.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!yaourt-vanille stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesyaourtvanille[Math.floor(Math.random() * imagesyaourtvanille.length)]))
    },
    name: 'yaourt-vanille'
}