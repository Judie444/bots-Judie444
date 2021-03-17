const Discord = require('discord.js'),
    replies = ['Voici votre Chocolat Chaud ^^', 'Et un Chocolat Chaud !', 'Bon Appétit', 'Voici votre commande ^^']
    imagescoca = ['https://i.pinimg.com/236x/63/63/a9/6363a9fe9494fb1774f207df5b408797.jpg', 'https://i.pinimg.com/236x/28/44/12/284412959322ce8e4d01dca85a242d61.jpg', 'https://i.pinimg.com/236x/32/e4/5a/32e45ad2de7f3027396dcc2eded5dc7b.jpg', 'https://i.pinimg.com/236x/58/92/c0/5892c06e1a43050072086e6a16b36937.jpg', 'https://i.pinimg.com/236x/b7/b5/25/b7b5259462c227b18fce2f318bf7e3fa.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!chocolat-chaud stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imageschocolatchaud[Math.floor(Math.random() * imageschocolatchaud.length)]))
    },
    name: 'chocolat-chaud'
}