const db = require("quick.db");//require the packages
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'whitelist',
    description: 'Whitelist a user',
    cooldown: 0,
    aliases: ['unblock'],
    usage: '<@user>',
    permissions: [],
    execute: async (client, message, args) => {//everyone haves different execute parameters
       if (!'572545821849944076'.includes(message.author.id)) {
    message.delete()
    var evaslnaoEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Due to security issues, whitelist can be only used by developers.')

 message.channel.send(evaslnaoEmbed).then(a => a.delete({ timeout: 5000 }))}
    
        let user;
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else if (args[0]) {
          user = message.guild.members.cache.get(args[0]).user;
        } 
        
        if(!user) return message.channel.send("You did not specify a user")
    
        let blacklist = db.get(`blacklist_${user.id}`)
        
        if(blacklist === 0 || blacklist === null) return message.channel.send(`${user}, Is not blacklisted`) //here you are checking if the user is already blacklisted
        
        const embed = new MessageEmbed()
        .setAuthor('Hyde', client.user.displayAvatarURL())
        .setTitle('Whitelisted!')
        .setDescription(`${user} has been whitelisted`)
        .setTimestamp()
        user.send(embed)

        message.channel.send(embed)
    db.delete(`blacklist_${user.id}`, 1)//here you delete the "blacklist" status from the database
    }
}