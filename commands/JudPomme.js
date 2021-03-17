const Discord = require('discord.js'),
    replies = ['Voici votre Jus de Pomme ^^', 'Et un Jus de Pomme !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesjuspomme = ['https://i.pinimg.com/236x/55/55/7a/55557a017b3ac00f143823298c8ea599.jpg', 'https://i.pinimg.com/236x/df/98/d3/df98d3188e027360ff37ceaec5d76dd5.jpg']

module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!jus-pomme stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesjuspomme[Math.floor(Math.random() * imagesjuspomme.length)]))
    },
    name: 'jus-pomme'
}