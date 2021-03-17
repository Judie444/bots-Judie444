const Discord = require('discord.js'),
    replies = ['Voici votre Omelette ^^', 'Et une Omelette !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesomelette = ['https://i.pinimg.com/236x/a7/62/d8/a762d8ade62d99328e1ecbf7ea70afb9.jpg', 'https://i.pinimg.com/236x/1c/86/57/1c8657b57c6b466185a018284a8727cd.jpg', 'https://i.pinimg.com/236x/68/8f/91/688f9191d1986da3057bcfc4d85ddcc4.jpg', 'https://i.pinimg.com/564x/36/ed/4a/36ed4ab7cd04b8cd6b024a9d81602705.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!omelette stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesomelette[Math.floor(Math.random() * imagesomelette.length)]))
    },
    name: 'omelette'
}