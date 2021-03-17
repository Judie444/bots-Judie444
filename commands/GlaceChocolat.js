const Discord = require('discord.js'),
    replies = ['Voici votre Glace au Chocolat ^^', 'Et une Glace au Chocolat !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesglacechocolat = ['https://i.pinimg.com/236x/6c/78/23/6c78232bf72de1ce4dd694bd92872f83.jpg', 'https://i.pinimg.com/236x/4d/25/18/4d2518b9846f49c4a50d1acf3a0667c7.jpg', 'https://i.pinimg.com/236x/c6/1c/e9/c61ce90602b32e76c6d45b6d7bdf7fbf.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!glace-chocolat stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesglacechocolat[Math.floor(Math.random() * imagesglacechocolat.length)]))
    },
    name: 'glace-chocolat'
}