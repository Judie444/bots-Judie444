const Discord = require('discord.js'),
    replies = ['Voici votre Gaufre ^^', 'Et une Gaufre !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesgaufrenut = ['https://i.pinimg.com/236x/d7/92/62/d79262ddeae23033f559f9947e7a735f.jpg', 'https://i.pinimg.com/236x/a1/03/10/a10310131e7bcf1600e06bec34dff9de.jpg', 'https://i.pinimg.com/236x/b8/e2/38/b8e2381a22a07fe20ba6d8c25f15e20b.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!gaufre-au-nutella stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesgaufrenut[Math.floor(Math.random() * imagesgaufrenut.length)]))
    },
    name: 'gaufre-au-nutella'
}