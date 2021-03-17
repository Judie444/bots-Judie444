const Discord = require('discord.js'),
    replies = ['Voici votre Yaourt ^^', 'Et une Yaourt !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesyaourt = ['https://i.pinimg.com/236x/56/f2/e1/56f2e1d1a06440acf5ee77120ef2a77a.jpg', 'https://i.pinimg.com/236x/64/d0/79/64d07917b3c22e36b4163eb81186b5bd.jpg', 'https://i.pinimg.com/236x/15/b1/f2/15b1f2b19872324b60e913c9ebd3c826.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyc391AkoGDGV8QnXq9w81JF5O1PWU_ljtGQ&usqp=CAU', 'https://i.pinimg.com/236x/1f/ca/6b/1fca6b9cd61d9656a0c90269591d2e41.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!yaourt stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesyaourt[Math.floor(Math.random() * imagesyaourt.length)]))
    },
    name: 'yaourt'
}