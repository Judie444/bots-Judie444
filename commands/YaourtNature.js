const Discord = require('discord.js'),
    replies = ['Voici votre Yaourt Nature ^^', 'Et un Yaourt Nature !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesyaourtnature = ['https://i.pinimg.com/236x/64/d0/79/64d07917b3c22e36b4163eb81186b5bd.jpg', 'https://i.pinimg.com/236x/70/9d/51/709d512083f8f5320d4a804facab0efa.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!yaourt-nature stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesyaourtnature[Math.floor(Math.random() * imagesyaourtnature.length)]))
    },
    name: 'yaourt-nature'
}