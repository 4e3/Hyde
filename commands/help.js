const Discord = require("discord.js")
const prefix = process.env.PREFIX
const fs = require("fs");


module.exports = {
  name: 'help',
  cooldown: 5,
  usage: "<command>",
  aliases: ['commands'],
  description: 'Bot commands',
  permissions: [],

  execute(client, message, args, cmd, Discord) {
    const data = [];
    const { commands } = message.client;
       if (!args.length) {

         const embed = new Discord.MessageEmbed()
            .setTitle('Here\'s a list of all my commands:')
            .addField("**Developer:**", "• rev ❄️#8182")
            .addFields(
               { name: '**Commands:**', value: commands.map(command => command.name).join(', ') },
               { name: '\u200B', value: `For help on a specific command send: \`${prefix}help [command name]\``}
            )

         return message.channel.send(embed)
       }

    const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
      


          const coolEmbed = new Discord.MessageEmbed()
          .setTitle(`How to use ${command.name}`)
          .setDescription(data)
          message.channel.send(coolEmbed)

  }
}		//message.channel.send(data, { split: true });
   
    /*const newEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Help')
      .addField(`Lead Developer`, '**• rev#8182**')
      .addField('Prefix', `Prefix = \`${prefix}\``)
      //.addField('Server Owner', `**•${message.guild.ownerId}**`)
      .addField('Commands', `\`ping\` \`uptime\` \`suggest\` \n \`uptime\` \`avatar\`\n \`gtn\` \`userinfo\` \`yt\` \n \`emojify\` \`8ball\` \`scramble\``)
      .addField('Developer Only', `\`eval\` \`dm\` \`say\``)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send(newEmbed);*/

