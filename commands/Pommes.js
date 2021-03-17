const Discord = require('discord.js'),
    replies = ['Voici vos Pommes ^^', 'Et voilà, quelques Pommes !', 'Bon Appétit', 'Voici votre commande ^^']
    imagespommes = ['https://i.pinimg.com/236x/b9/f1/db/b9f1db5707991ed17570ecc785d405ac.jpg', 'https://i.pinimg.com/236x/0f/21/07/0f2107d05fe40d0ca69cdb71da546ccc.jpg', 'https://i.pinimg.com/236x/27/56/1f/27561f283d8bb12c40b98ee4d67af98f.jpg', 'https://i.pinimg.com/236x/14/4e/fb/144efb3e23d41b7bdb35f17c6c676cf9.jpg', 'https://i.pinimg.com/236x/6c/86/40/6c86404e603584b0bbae0f0811e275c1.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!pommes stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imagespommes[Math.floor(Math.random() * imagespommes.length)]))
    },
    name: 'pommes'
}