const Discord = require('discord.js'),
    replies = ['Voici votre Crêpe au Sucre ^^', 'Et une Crêpe au Sucre !', 'Bon Appétit', 'Voici votre commande ^^']
    imagescrepesucre = ['https://i.pinimg.com/236x/bb/84/5d/bb845d6b14827f6fc6965c34ec6f6b5f.jpg', 'https://i.pinimg.com/236x/63/da/b9/63dab9b54000f82eefa9fe1465d26250.jpg', 'https://i.pinimg.com/236x/5f/e1/49/5fe149b0ec6bc29cb51390bba0f382d0.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!crepe-au-sucre stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagescrepesucre[Math.floor(Math.random() * imagescrepesucre.length)]))
    },
    name: 'crepe-au-sucre'
}