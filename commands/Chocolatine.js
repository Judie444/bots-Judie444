const Discord = require('discord.js'),
    replies = ['Voici votre Chocolatine ^^', 'Et une Chocolatine !', 'Bon Appétit', 'Voici votre commande ^^']
    imageschoco = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdA-8Wbu04dGBxboH1YTU27O_ydjviCR4dQQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5NYw_SxCyiZ_g3AHthSQ2dUkduYY1Mx5iw&usqp=CAU']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!chocolatine stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imageschoco[Math.floor(Math.random() * imageschoco.length)]))
    },
    name: 'chocolatine'
}