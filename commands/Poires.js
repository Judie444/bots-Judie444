const Discord = require('discord.js'),
    replies = ['Voici vos Poires ^^', 'Et voilà, quelques Poires !', 'Bon Appétit', 'Voici votre commande ^^']
    imagespoires = ['https://i.pinimg.com/236x/59/09/07/5909075762afc52dafa6d7c2ef77759a.jpg', 'https://i.pinimg.com/236x/85/cb/2b/85cb2b67cbc1e108af208253708014a2.jpg', 'https://i.pinimg.com/236x/bc/27/4a/bc274aee73c5868f2b063cc8094eccd8.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!poires stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagespoires[Math.floor(Math.random() * imagespoires.length)]))
    },
    name: 'poires'
}