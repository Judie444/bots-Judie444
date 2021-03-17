const Discord = require('discord.js'),
    replies = ['Voici votre Crêpe au Nutella ^^', 'Et une Crêpe au Nutella !', 'Bon Appétit', 'Voici votre commande ^^']
    imagescrepenut = ['https://i.pinimg.com/236x/b3/11/67/b3116738ff108fb917668c4c1a91d89d.jpg', 'https://i.pinimg.com/236x/66/93/d8/6693d89cc0c5ca76badeb85b85cc947a.jpg', 'https://i.pinimg.com/236x/99/b4/d0/99b4d00e55a8f1aadb4a06493274425c.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!crepe-au-nutella stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagescrepenut[Math.floor(Math.random() * imagescrepenut.length)]))
    },
    name: 'crepe-au-nutella'
}