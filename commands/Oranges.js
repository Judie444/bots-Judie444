const Discord = require('discord.js'),
    replies = ['Voici vos Oranges ^^', 'Et voilà, quelques Oranges !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesoranges = ['https://i.pinimg.com/236x/b9/f7/e2/b9f7e2e7aa16d4a8da52ad6fc9c4d8bd.jpg', 'https://i.pinimg.com/236x/19/ac/df/19acdfd3a0694bedee6cca8c9d25fd93.jpg', 'https://i.pinimg.com/236x/5e/3f/ff/5e3fff9850d1e3e3774146c7c4a95993.jpg', 'https://i.pinimg.com/236x/48/26/0d/48260dcfff9542167ce6a8a867502b12.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!oranges stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesoranges[Math.floor(Math.random() * imagesoranges.length)]))
    },
    name: 'oranges'
}