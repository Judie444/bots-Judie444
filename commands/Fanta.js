const Discord = require('discord.js'),
    replies = ['Voici votre Fanta ^^', 'Et un Fanta !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesfanta = ['https://i.pinimg.com/236x/e9/69/f2/e969f298dc5782e5867ec222c793d1ee.jpg', 'https://i.pinimg.com/236x/86/2f/4d/862f4d150547c0c6757fac7646dc208c.jpg', 'https://i.pinimg.com/236x/a7/28/5c/a7285cabb82836b4fe049ad42aac0ad1.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!fanta stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesfanta[Math.floor(Math.random() * imagesfanta.length)]))
    },
    name: 'fanta'
}