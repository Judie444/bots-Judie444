const Discord = require('discord.js'),
    replies = ['Voici votre Donut ^^', 'Et un Donut !', 'Bon Appétit', 'Voici votre commande ^^']
    imagesdonut = ['https://i.pinimg.com/236x/33/26/cb/3326cb9220c198744af816b85027a7ac.jpg', 'https://i.pinimg.com/236x/8c/20/e2/8c20e2fc93da75fe28bf6e4bd3586579.jpg', 'https://i.pinimg.com/236x/c3/d1/c1/c3d1c153d228dd113d0dbbad2de420e1.jpg', 'https://i.pinimg.com/236x/f5/16/be/f516be2ba014b721918ccd52a844199f.jpg', 'https://i.pinimg.com/236x/05/26/6b/05266bc1d5ea3d0e51638a1bed71e2ed.jpg', 'https://i.pinimg.com/236x/8f/15/6f/8f156f34e598379f58d1c40444d61d23.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!donut stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagesdonut[Math.floor(Math.random() * imagesdonut.length)]))
    },
    name: 'donut'
}