const Discord = require('discord.js'),
    replies = ['Voici votre Burger ^^', 'Et un Burger !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesburger = ['https://i.pinimg.com/236x/6d/37/29/6d3729397dcbf06e1d22e12193a3df5e.jpg', 'https://i.pinimg.com/236x/7c/47/44/7c4744fa2d6e36bb69657845d7eb9b11.jpg', 'https://i.pinimg.com/236x/ae/e4/fa/aee4fac9b372dab38d37e4ce6742a953.jpg', 'https://i.pinimg.com/236x/ba/03/ab/ba03ab4834ae295a0ccfb891b370efba.jpg', 'https://i.pinimg.com/236x/0e/0e/a6/0e0ea639ef29aca9f221fa6a78f73d86.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!burger stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesburger[Math.floor(Math.random() * imagesburger.length)]))
    },
    name: 'burger'
}