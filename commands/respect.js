const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'respect',
  aliases: ['f', 'rp', '+rp'],
  usage: '',
  description: 'Show thy respect. Accepts arguments.',
  permissions: [],
  cooldown: 5,
  execute: async (client, message, args) => {

    const rep = await message.channel.send(
      new MessageEmbed()
      .setColor('GREY')
      .setFooter(`Press F to pay respect`)
      .setDescription(`${message.member} has paid their respect${args.length ? ` to ${args.join(' ')}.` : ''}`)
    );

    await message.delete().catch(() => null);

    return rep.react("🇫")
  }
};