const Discord = require('discord.js'),
    replies = ['Voici votre Glace à la Vanille ^^', 'Et une Glace à la Vanille !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesglacevanille = ['https://i.pinimg.com/236x/4c/9e/91/4c9e91854778e45583df9487ed2f5072.jpg', 'https://i.pinimg.com/236x/2f/57/42/2f5742470f421aef99c642e6b1d80a30.jpg', 'https://i.pinimg.com/236x/27/9d/c3/279dc3f7add229686ca757a9164c8772.jpg', 'https://i.pinimg.com/236x/58/1a/70/581a7009e6065d1540713c66afa0ccbb.jpg', 'https://i.pinimg.com/236x/05/7c/0c/057c0c7b689a3e588feb994aea9c8b4c.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!glace-vanille stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesglacevanille[Math.floor(Math.random() * imagesglacevanille.length)]))
    },
    name: 'glace-vanille'
}