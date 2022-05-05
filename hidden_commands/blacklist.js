const db = require("quick.db");
const { MessageEmbed } = require('discord.js');//require the packages
const Discord = require("discord.js")

module.exports = {
    name: 'blacklist',
    description: 'Blacklists a user from using the bot',
    //aliases: ['block'],
    cooldown: 0,
    permissions: [],
    usage: '<@user>',
    execute: async (client, message, args) => { //change all this previous lines to your normal parameters
        if (!'572545821849944076'.includes(message.author.id)) {
    message.delete()
    var evaslnoEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Due to security issues, blacklist can be only used by developers.')

 message.channel.send(evaslnoEmbed).then(a => a.delete({ timeout: 5000 })) //add your id without quotes
        }
        let user;
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else if (args[0]) {
          user = message.guild.members.cache.get(args[0]).user;
        } 
        
        if(!user) return message.channel.send("You forgot to specify a user!")
        let blacklist = db.get(`blacklist_${user.id}`)
  
        if(blacklist === null) {
            db.set(`blacklist_${user.id}`, 1);
        const embxed = new MessageEmbed()
        .setAuthor('Hyde', client.user.displayAvatarURL())
        .setTitle('Blacklisted!')
        .setDescription(`${user} is now blaclisted`)
        .setTimestamp()
        user.send(embed)

        message.channel.send(embxed)
        } else if(blacklist !== null) {
            message.channel.send(`That person is already blacklisted!`)
        } return;
    }

    }