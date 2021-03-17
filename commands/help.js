const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Besoin d\'aide? ^^')
            .setDescription('Je suis Koro, je me déplace extrêmement rapidement et peux donc vous apportez n\'importe quel plat en un instant !')
            .setColor('RANDOM')
            .addField('Commandes', 'Vous l\'aurez compris mon prefix est koro! et pour me demander quelque chose je vous conseille de vous référer à mon menu en faisant la commande koro!menu ^^')
            .addField('Attention', 'N\'utilisez pas d\'accents et pour les plats ne mettez pas d\'espace mais un tiret du six. Exemple pour un chocolat chaud : koro!chocolat-chaud')
            .setImage('https://cdn.discordapp.com/attachments/820649033185230848/821766874995621918/79b01dd1b944b13c6477033a67f6a967.jpg')
            .setThumbnail('https://i.pinimg.com/236x/69/4a/c1/694ac1a42b5ee29d3bbda2f1b30904e0.jpg')
            .setFooter('Koro', 'https://i.pinimg.com/236x/b7/c4/80/b7c480b165376e718b7b6816e4c354a0.jpg')
            .setTimestamp())
    },
    name: 'help'
}