const Discord = require('discord.js'),
    replies = ['Voici votre Tarte aux Pommes ^^', 'Et une Tarte aux Pommes !', 'Bon Appétit', 'Voici votre commande ^^']
    imagestartepomme = ['https://i.pinimg.com/236x/df/ef/45/dfef45f74505137d7f38e74faa437d57.jpg', 'https://i.pinimg.com/236x/29/e5/bb/29e5bb51579a7a84cac55c3f10d46695.jpg', 'https://i.pinimg.com/236x/51/74/67/51746704a67d230ab1d76d534e994bb3.jpg', 'https://i.pinimg.com/236x/09/98/13/099813ca44350e0816c71f500650da97.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!tarte-aux-pommes stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagestartepomme[Math.floor(Math.random() * imagestartepomme.length)]))
    },
    name: 'tarte-aux-pommes'
}