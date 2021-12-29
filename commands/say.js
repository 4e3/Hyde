const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  cooldown: 0,
  usage: "<word>",
  aliases: ['speak'],
  description: "bro",
  permissions: [],
   
  execute: async (client, message, args, cmd, Discord) => {
  if (!'572545821849944076'.includes(message.author.id)) {
    message.delete()
    var evalnoEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Due to security issues, say can be only used by developers.')

 message.channel.send(evalnoEmbed).then(a => a.delete({ timeout: 5000 }))
    
  } else {// if the message content includes @everyone OR ( || means or in js) @here, stop running the code. 
 

        let textChannel = message.mentions.channels.first() // the first channel that you tag
        if(!args[0]) return message.channel.send('Provide a channel for me to send the message in!'); // args are words or numbers after the command. The first word is args[0], and then args[1], and so on and so on.
        if(!args[1]) return message.channel.send('Provide a message to say!');
        if (!message.guild.channels.cache.has(textChannel.id)) return; // here we're checking if the textChannel id provided is in the server where the message is being sent.
        message.delete() // deleting the command message

            msg = args.slice(1).join(" "); // everything including and after args[1]
            textChannel.send(msg) // sending the message in the text channel provided
  }
  }
};