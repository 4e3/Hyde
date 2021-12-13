module.exports = {
    name: 'suggestions',
    cooldown: 300,
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(client, message, args, cmd, Discord){

      var sugembed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription("Your suggest has been sent to the suggestions channel")

        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.channel.send(sugembed)
  
        }).catch((err)=>{
            throw err;
        });
    }
}