const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  cooldown: 10,
  aliases: [],
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  permissions: [],
  async execute(client, message, args, cmd, Discord) {
    const okoembed = new MessageEmbed() // create embed 
        .setAuthor(':8ball: The 8 Ball says...')
        .setColor('RED')
        .addField('Error:', 'Ask a full question!');
    if (!args[0]) return message.channel.send(okoembed); // return if no question is commenced
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed() // create embed 
        .setAuthor(':8ball: The 8 Ball says...')
        .setColor('ORANGE').addField('Question:', question)
        .addField('Answer:', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`); // no permissins so bot will default to a raw message
    }
  },
};
