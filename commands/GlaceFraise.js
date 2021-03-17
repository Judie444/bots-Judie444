const Discord = require('discord.js'),
    replies = ['Voici votre Glace à la Fraise ^^', 'Et une Glace à la Fraise !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesglacefraise = ['https://i.pinimg.com/236x/b6/3f/70/b63f7044ec57a5e51d28c4f1559cecc5.jpg', 'https://i.pinimg.com/236x/f9/9c/ca/f99ccae500f5dea5e9f18fb60eb9651f.jpg', 'https://i.pinimg.com/236x/4b/4c/a8/4b4ca8dc7eb73137b97fc22bedb60222.jpg', 'https://i.pinimg.com/236x/bf/76/01/bf76012b9b9e5a0b861d9cf4bc151aa2.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!glace-fraise stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesglacefraise[Math.floor(Math.random() * imagesglacefraise.length)]))
    },
    name: 'glace-fraise'
}