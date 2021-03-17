const Discord = require('discord.js'),
    replies = ['Voici votre Ice Tea ^^', 'Et un Ice Tea !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesicetea = ['https://i.pinimg.com/236x/7b/e4/a7/7be4a70015de44f62fe8b52c89d17a3f.jpg', 'https://i.pinimg.com/236x/99/90/d0/9990d08da977af23266e4ef6fb6e20a7.jpg', 'https://i.pinimg.com/236x/e2/e5/fe/e2e5fe8724d639c29ebe69c2a118b9eb.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!ice-tea stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesicetea[Math.floor(Math.random() * imagesicetea.length)]))
    },
    name: 'ice-tea'
}