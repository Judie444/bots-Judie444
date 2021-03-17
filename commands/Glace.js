const Discord = require('discord.js'),
    replies = ['Voici votre Glace ^^', 'Et une Glace !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesglace = ['https://i.pinimg.com/236x/35/43/ba/3543bace1e772bb0d3132596b8f3f7a8.jpg', 'https://i.pinimg.com/236x/d0/95/a7/d095a7bc9fb770108b7b7475de3115e7.jpg', 'https://i.pinimg.com/236x/a9/2f/f2/a92ff2017780783ab43ae0c1f33f79ac.jpg', 'https://i.pinimg.com/236x/58/d5/d5/58d5d5aa25d2a034777dfe38c1de5d37.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!glace stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesglace[Math.floor(Math.random() * imagesglace.length)]))
    },
    name: 'glace'
}