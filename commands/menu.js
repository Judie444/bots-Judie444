const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Voici Le Menu ^^')
            .setDescription('Service à volonté ! *N\'hésitez pas à proposer des idées pour agrandir le menu.*')
            .setColor('RANDOM')
            .addField('Petit-Déjeuner', 'Croissant, Petits pains au chocolat (ou Chocolatine), Crêpe au Nutella (ou au sucre), Gaufre au Nutella (ou au sucre)')
            .addField('Déjeuner ou Diner', 'Kebab, Tacos, Burger, Pizza, Omelette, Sandwiches, Panini, Sushi')
            .addField('Desserts', 'Donut, Profiterole, Glace saveur chocolat (vanille, pistache, ou fraise), Yaourt au chocolat (vanille, fraise, ou nature), Tarte aux pommes (poires, ou fraises)')
            .addField('Fruits', 'Pommes, Bananes, Poires, Cerises, Fraises, Oranges, Kiwis')
            .addField('Boissons', 'Coca, Fanta, Orangina, Ice Tea, Eau, Thé, Café, Bière, Monster, Jus d\'orange (de raisin, ou de pomme), Chocolat Chaud, Lait')
            .setImage('https://i.pinimg.com/originals/0b/c7/ef/0bc7efed08b66f740916cf3993b66a7c.gif')
            .setThumbnail('https://i.pinimg.com/236x/b3/e5/9b/b3e59b7f8620d51f95606bd1f443fffb.jpg')
            .setFooter('Koro', 'https://i.pinimg.com/236x/b7/c4/80/b7c480b165376e718b7b6816e4c354a0.jpg')
            .setTimestamp())
    },
    name: 'menu'
}