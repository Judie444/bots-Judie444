const Discord = require('discord.js'),
    replies = ['Voici votre Jus de Orange ^^', 'Et un Jus de Orange !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesjusorange = ['https://i.pinimg.com/236x/44/a4/72/44a47287267fc95d64f70b7bc2f576e3.jpg', 'https://i.pinimg.com/236x/49/b9/ac/49b9ac7cbc73382e32d8bd785d3b8c20.jpg', 'https://i.pinimg.com/236x/8e/0e/ff/8e0effa24aacbc1eba4646b84a1529f1.jpg', 'https://i.pinimg.com/236x/5d/32/ea/5d32ea755209d925544092787f820300.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!jus-orange stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesjusorange[Math.floor(Math.random() * imagesjusorange.length)]))
    },
    name: 'jus-orange'
}