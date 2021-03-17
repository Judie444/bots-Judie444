const Discord = require('discord.js'),
    replies = ['Voici vos Cerises ^^', 'Et voilà, quelques Cerises !', 'Bon Appétit', 'Voici votre commande ^^']
    imagescerises = ['https://i.pinimg.com/236x/71/7b/ad/717bad809188856cae778a8c23942869.jpg', 'https://i.pinimg.com/236x/ea/24/55/ea24555369e08a8a8b867fcdacc30814.jpg', 'https://i.pinimg.com/236x/de/7f/0f/de7f0ff5a06e2cd1b9831c47e1cb4df4.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!cerises stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagescerises[Math.floor(Math.random() * imagescerises.length)]))
    },
    name: 'cerises'
}