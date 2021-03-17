const Discord = require('discord.js'),
    replies = ['Voici votre Tarte aux Fraises ^^', 'Et une Tarte aux Fraises !', 'Bon Appétit', 'Voici votre commande ^^']
    imagestartefraise = ['https://i.pinimg.com/236x/90/6b/b0/906bb09186fe2e2253ead2f7257bf3d7.jpg', 'https://i.pinimg.com/236x/eb/2d/d4/eb2dd4e418897e555103333b6623159e.jpg', 'https://i.pinimg.com/236x/a8/01/5e/a8015e9f6740ce41355f9850c124dbd5.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!tarte-aux-fraises stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagestartefraise[Math.floor(Math.random() * imagestartefraise.length)]))
    },
    name: 'tarte-aux-fraises'
}