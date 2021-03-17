const Discord = require('discord.js'),
    replies = ['Voici vos Kiwis ^^', 'Et voilà, quelques Kiwis !', 'Bon Appétit', 'Voici votre commande ^^']
    imageskiwis = ['https://i.pinimg.com/236x/0b/f0/91/0bf091ecd445d07abf8cbcea0394038c.jpg', 'https://i.pinimg.com/236x/46/68/3d/46683d24484a68740458dd1183be43be.jpg', 'https://i.pinimg.com/236x/cd/53/13/cd53135bb10461fd8c3e9f04d15fd50b.jpg', 'https://i.pinimg.com/236x/76/8e/a4/768ea4b0e2eb755ee123f01106a83b24.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!kiwis stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imageskiwis[Math.floor(Math.random() * imageskiwis.length)]))
    },
    name: 'kiwis'
}