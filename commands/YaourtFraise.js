const Discord = require('discord.js'),
    replies = ['Voici votre Yaourt à la Fraise^^', 'Et un Yaourt à la Fraise !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesyaourtfraise = ['https://i.pinimg.com/236x/56/f2/e1/56f2e1d1a06440acf5ee77120ef2a77a.jpg', 'https://i.pinimg.com/236x/ff/65/09/ff65092fbaf5352ebcd9d105d1486197.jpg', 'https://i.pinimg.com/236x/86/18/39/86183942f6b2d77307e6bc5e40a63d38.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!yaourt-fraise stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesyaourtfraise[Math.floor(Math.random() * imagesyaourtfraise.length)]))
    },
    name: 'yaourt-fraise'
}