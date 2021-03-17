const Discord = require('discord.js'),
    replies = ['Voici votre Kebab ^^', 'Et un Kebab !', 'Bon Appétit', 'Voici votre commande ^^']
    imageskebab = ['https://i.pinimg.com/236x/e9/d3/20/e9d320be87e6b74cf64cc1fdac8aecef.jpg', 'https://i.pinimg.com/236x/58/0f/4d/580f4ddaa097e963215d7aae2f2f64df.jpg', 'https://i.pinimg.com/236x/ca/05/19/ca05195a151493486b0b8ab9e741f033.jpg']
 
module.exports = {
    run: (message, args) => {
        const question = args.join('stp')
        if (!question) return message.channel.send(new Discord.MessageEmbed()
            .setTitle('La Politesse !')
            .setDescription('On dit *koro!kebab stp*')
            .setImage('https://i.pinimg.com/236x/2e/7a/f8/2e7af829ede98cec4b3d466b5717c331.jpg'))
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(replies[Math.floor(Math.random() * replies.length)])
            .setImage(imageskebab[Math.floor(Math.random() * imageskebab.length)]))
    },
    name: 'kebab'
}