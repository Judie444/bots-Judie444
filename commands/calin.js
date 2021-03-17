const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Câlin Pour Tout Le Monde !!! ^^')
            .setColor('RANDOM')
            .setImage('https://i.pinimg.com/564x/1a/9e/04/1a9e0446ba03bd7fcc7315c176dd209f.jpg'))
    },
    name: 'hug'
}