module.exports = {
    name: 'avatar',
    cooldown: 5,
    aliases: ["profile"],
    description: 'sadasdBot commandssadsa',
    permissions: [],

    execute(client, message, args, cmd, Discord) {

      const lol = client.emojis.cache.find(emoji => emoji.name === "bruhimagine");

      const target = message.mentions.users.first();

        if(!target) {
      return message.channel.send(`mention someone for this to actually work ${lol}`)
    }

    if(message.mentions.users.first().bot) {
      return message.channel.send("no")
    }

    if(target.id = '572545821849944076') {
      return message.channel.send("not yours")
    }
      
      var avatarEmbed = new Discord.MessageEmbed()
 .setColor('RANDOM')
.setImage(target.displayAvatarURL({dynamic: true}))

 message.channel.send(avatarEmbed)
     }
}