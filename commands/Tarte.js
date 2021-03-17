const Discord = require('discord.js'),
    replies = ['Voici votre Tarte ^^', 'Et une Tarte !', 'Bon Appétit', 'Voici votre commande ^^']
    imagestarte = ['https://i.pinimg.com/236x/df/ef/45/dfef45f74505137d7f38e74faa437d57.jpg', 'https://i.pinimg.com/236x/29/e5/bb/29e5bb51579a7a84cac55c3f10d46695.jpg', 'https://i.pinimg.com/236x/51/74/67/51746704a67d230ab1d76d534e994bb3.jpg', 'https://i.pinimg.com/236x/09/98/13/099813ca44350e0816c71f500650da97.jpg', 'https://i.pinimg.com/236x/df/fc/0e/dffc0ecf3f41de87c245672ebbb40f92.jpg', 'https://i.pinimg.com/236x/e3/91/a3/e391a374b204e2d4698a2d0b4e21d749.jpg', 'https://i.pinimg.com/236x/cd/8f/0f/cd8f0fa6c82edb9f29fead95613431f8.jpg', 'https://i.pinimg.com/236x/90/6b/b0/906bb09186fe2e2253ead2f7257bf3d7.jpg', 'https://i.pinimg.com/236x/eb/2d/d4/eb2dd4e418897e555103333b6623159e.jpg', 'https://i.pinimg.com/236x/a8/01/5e/a8015e9f6740ce41355f9850c124dbd5.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!tarte stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagestarte[Math.floor(Math.random() * imagestarte.length)]))
    },
    name: 'tarte'
}