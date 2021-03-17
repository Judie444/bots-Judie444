const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setDescription('[Recherche Google](https://google.fr)')
            .setColor('RANDOM')
            .addField('Champ 1', 'Bonjour c\'est moi', true)
            .addField('Champ 2', 'Blabla', true)
            .setAuthor('Judie444', 'https://i.pinimg.com/236x/4f/08/4d/4f084d258e6e6e785dbab52d8e8e0158.jpg', 'https://google.fr')
            .setImage('https://i.pinimg.com/236x/05/84/1e/05841ec966a64dbf63df2c8a3449fa11.jpg')
            .setThumbnail('https://i.pinimg.com/236x/0f/3e/32/0f3e325ba5576c7760dad42fe1cad432.jpg')
            .setFooter('Koro', 'https://i.pinimg.com/236x/b7/c4/80/b7c480b165376e718b7b6816e4c354a0.jpg')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}