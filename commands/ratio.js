const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ratio',
  aliases: [],
  usage: '',
  description: 'Show thy respect. Accepts arguments.',
  permissions: [],
  cooldown: 5,
  execute: async (client, message, args) => {
    const target = message.mentions.users.first();

    if(!target) {
      return message.channel.send(`mention someone for this to actually work`)
    }

    
    const rep = await message.channel.send(
      new MessageEmbed()
      .setColor('GREY')
      .setDescription(`${target} just got ratioed.`)
    );

    await message.delete().catch(() => null);

    rep.react("🇫")
    rep.react("🥶")
    rep.react("😳")
    rep.react("🙄")
    rep.react("💀")
    rep.react("💩")
    rep.react("🪑")
    rep.react("🅰️")
  }
};