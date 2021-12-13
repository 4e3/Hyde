module.exports = {
    name: 'dm',
    cooldown: 0,
    aliases: [],
    description: 'Bot commandssadsa',
    permissions: [],

    execute(client, message, args, cmd, Discord) {

      const lol = client.emojis.cache.find(emoji => emoji.name === "bruhimagine");
      if (!'572545821849944076'.includes(message.author.id)) {
    message.delete()
    var evalnoEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Due to security issues, dm can be only used by developers.')

 message.channel.send(evalnoEmbed).then(a => a.delete({ timeout: 5000 }))
    
  } else {
      var dmrseason = args.slice(1).join(" ");
      const dmtarget = message.mentions.users.first();

      if(!dmtarget) {
      return message.channel.send(`mention someone for this to actually work ${lol}`)
    }
      dmtarget.send(dmrseason)
      message.channel.send("ez done")
     }
    }
}