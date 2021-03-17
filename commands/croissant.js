const Discord = require('discord.js'),
    replies = ['Voici votre Croissant ^^', 'Et un Croissant !', 'Bon Appétit', 'Voici votre commande ^^']
    imagescroissant = ['https://i.pinimg.com/236x/5f/f7/92/5ff792bfd0092353962fdfce52b41474.jpg', 'https://i.pinimg.com/236x/b2/51/9e/b2519e63030a2f603223664e69dcd704.jpg', 'https://i.pinimg.com/236x/8c/cf/fb/8ccffbf462ce41e3e979eb032da43bf3.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!croissant stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagescroissant[Math.floor(Math.random() * imagescroissant.length)]))
    },
    name: 'croissant'
}