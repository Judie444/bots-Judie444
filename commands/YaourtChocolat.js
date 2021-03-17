const Discord = require('discord.js'),
    replies = ['Voici votre Yaourt au Chocolat ^^', 'Et un Yaourt au Chocolat !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesyaourtchoco = ['https://i.pinimg.com/236x/1f/ca/6b/1fca6b9cd61d9656a0c90269591d2e41.jpg', 'https://i.pinimg.com/236x/86/7d/16/867d166c50cc65cdd0db39a2602bb138.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!yaourt-chocolat stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesyaourtchoco[Math.floor(Math.random() * imagesyaourtchoco.length)]))
    },
    name: 'yaourt-chocolat'
}