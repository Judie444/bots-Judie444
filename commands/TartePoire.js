const Discord = require('discord.js'),
    replies = ['Voici votre Tarte aux Poires ^^', 'Et une Tarte aux Poires !', 'Bon Appétit', 'Voici votre commande ^^']
    imagestartepoire = ['https://i.pinimg.com/236x/df/fc/0e/dffc0ecf3f41de87c245672ebbb40f92.jpg', 'https://i.pinimg.com/236x/e3/91/a3/e391a374b204e2d4698a2d0b4e21d749.jpg', 'https://i.pinimg.com/236x/cd/8f/0f/cd8f0fa6c82edb9f29fead95613431f8.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!tarte-aux-poires stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagestartepoire[Math.floor(Math.random() * imagestartepoire.length)]))
    },
    name: 'tarte-aux-poires'
}