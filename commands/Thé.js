const Discord = require('discord.js'),
    replies = ['Voici votre Thé ^^', 'Et un Thé !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesthe = ['https://i.pinimg.com/236x/78/3a/0a/783a0a3ab8251474c4d011e1eeef444b.jpg', 'https://i.pinimg.com/236x/21/4b/5c/214b5c024987ebaa6c7dc4cadc143e00.jpg', 'https://i.pinimg.com/236x/51/f4/77/51f4771a26ab953a95fe5c7216a8c14a.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!the stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesthe[Math.floor(Math.random() * imagesthe.length)]))
    },
    name: 'the'
}