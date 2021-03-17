const Discord = require('discord.js'),
    replies = ['Voici votre Pizza ^^', 'Et un Pizza !', 'Bon Appétit', 'Voici votre commande ^^']
    imagespizza = ['https://i.pinimg.com/236x/ab/69/a5/ab69a54fef21600b959b1f8b9e299e1e.jpg', 'https://i.pinimg.com/236x/12/1e/3c/121e3c7353b6c0c7ed5b8913918bc8bc.jpg', 'https://i.pinimg.com/236x/97/c3/e6/97c3e663f8e84aca32444d8ece2da4a7.jpg', 'https://i.pinimg.com/236x/11/e0/07/11e007f4bf2252817aba8a4be22a6212.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!pizza stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagespizza[Math.floor(Math.random() * imagespizza.length)]))
    },
    name: 'pizza'
}