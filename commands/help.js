const Discord = require("discord.js")

module.exports = {
  name: 'help',
  cooldown: 5,
  aliases: ['commands'],
  description: 'Bot commands',
  permissions: [],

  execute(client, message, args, cmd, Discord) {


    const newEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Help')
      .addField(`Lead Developer`, '**• rev#8182**')
      .addField('Prefix', `Prefix = \`${prefix}\``)
      //.addField('Server Owner', `**•${message.guild.ownerId}**`)
      .addField('Commands', `\`ping uptime\` \`suggest\` \n \`uptime\` \`avatar\` \`afk\` \n \`gtn\` \`userinfo\` \`yt <search>\` \n \`emojify <message>\` \`8ball\` \`scramble\``)
      .addField('Developer Only', `\`eval\` \`dm @user\` \`say <message>\``)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send(newEmbed);
  }
}
