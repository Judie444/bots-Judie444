const Discord = require('discord.js'),
    replies = ['Voici votre Glace ^^', 'Et une Glace !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesglacepistache = ['https://i.pinimg.com/236x/a0/45/d3/a045d37af79004c691a2597a0539e1db.jpg', 'https://i.pinimg.com/236x/44/29/11/442911693d1e7ab7d577dad0c16313ba.jpg', 'https://i.pinimg.com/236x/ad/5f/a1/ad5fa10d20e6864fbaa337ae50899734.jpg', 'https://i.pinimg.com/236x/bb/58/17/bb58173690d9f024989678f13976f5d8.jpg', 'https://i.pinimg.com/236x/b2/b2/9b/b2b29b581ec804843839163dbf8ee0c9.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!glace-pistache stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesglacepistache[Math.floor(Math.random() * imagesglacepistache.length)]))
    },
    name: 'glace-pistache'
}