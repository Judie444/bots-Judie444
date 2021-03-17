const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut être', 'Evidemment']
    images = ['https://i.pinimg.com/236x/0d/7f/c4/0d7fc47259f8661316da9edef8e3290c.jpg', 'https://i.pinimg.com/236x/bf/1c/52/bf1c5288e699541b4f95631948e3e97d.jpg', 'https://i.pinimg.com/236x/7e/fc/84/7efc84bda963a83b52761597d0d65edf.jpg']
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Hasard')
            .setDescription(replies[Math.floor(Math.random() * replies.length)])
            .setImage(images[Math.floor(Math.random() * images.length)]))
    },
    name: 'hasard'
}