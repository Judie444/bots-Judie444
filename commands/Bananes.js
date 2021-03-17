const Discord = require('discord.js'),
    replies = ['Voici vos Bananes ^^', 'Et voilà, quelques Bananes !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesbananes = ['https://i.pinimg.com/236x/00/de/88/00de88f07a2d07cd3638b80149b35d72.jpg', 'https://i.pinimg.com/236x/92/76/95/92769588345f52cb8e7cf2b283cf1023.jpg', 'https://i.pinimg.com/236x/f0/78/ed/f078ed1321cd1f9699b0cecfcebd7a6f.jpg', 'https://i.pinimg.com/236x/2e/6d/e3/2e6de3c3a5ef1b3a97e422d5805589c3.jpg', 'https://i.pinimg.com/236x/ed/bc/6a/edbc6a342cc0023ff9c36e6255b2efd3.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!bananes stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesbananes[Math.floor(Math.random() * imagesbananes.length)]))
    },
    name: 'bananes'
}