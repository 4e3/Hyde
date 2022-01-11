const Discord = require('discord.js')

module.exports = {
 name: "userinfo",
 cooldown: 5,
 usage: "<@user",
 aliases: ["ui"],
 description: "Userinfo of mentioned user/id or if no one mentioned then yours",
 permissions: [],
execute: async(client, message, args, cmd, Discord) => {
      const embed = new Discord.MessageEmbed()
const moment = require('moment');

const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
if (!member) 
     return message.channel.send('Please mention the user for the userinfo..');


   const uiembed = new Discord.MessageEmbed() 
     .setTitle(`${member.displayName}'s Information`)
     .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
     .addField('User', member, true)
     .addField('Discriminator', `\`#${member.user.discriminator}\``, true)
     .addField('ID', `\`${member.id}\``, true)
     .addField('Bot', `\`${member.user.bot}\``, true)
     .addField('Color Role', member.roles.color || '`None`', true)
     .addField('Highest Role', member.roles.highest, true)
     .addField('Joined server on', `\`${moment(member.joinedAt).format('MMM DD YYYY')}\``, true)
     .addField('Joined Discord on', `\`${moment(member.user.createdAt).format('MMM DD YYYY')}\``, true)
     .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
     .setTimestamp()
     .setColor(member.displayHexColor);
   message.channel.send(uiembed);
   }
 }