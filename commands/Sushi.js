const Discord = require('discord.js'),
    replies = ['Voici votre Sushi ^^', 'Et un Sushi !', 'Bon Appétit', 'Voici votre commande ^^']
    imagessushi = ['https://i.pinimg.com/236x/a8/d7/ca/a8d7ca1adc7cf6bbc6632adc8766ed67.jpg', 'https://i.pinimg.com/236x/e9/9d/83/e99d83b5bbcb4cd96ddc94263c009415.jpg', 'https://i.pinimg.com/236x/0a/a6/be/0aa6bef5d667bf3f01f0998c4bab8719.jpg', 'https://i.pinimg.com/236x/19/7a/fe/197afefcfd690a10ffdb526c9850b284.jpg', 'https://i.pinimg.com/236x/9a/55/a3/9a55a30b67ad754a70dd9de89db7970f.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!sushi stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagessushi[Math.floor(Math.random() * imagessushi.length)]))
    },
    name: 'sushi'
}