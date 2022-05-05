module.exports = {
    name: 'avatar',
    cooldown: 5,
    usage: "@user",
    aliases: ["profile", "pfp"],
    description: 'sadasdBot commandssadsa',
    permissions: [],

    execute(client, message, args, cmd, Discord) {

    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      

      const lol = client.emojis.cache.find(emoji => emoji.name === "bruhimagine");

      const target = message.mentions.members.first()

        if(!target) {
      return message.channel.send(`mention someone for this to actually work ${lol}`)
    }

  
      
      var avatarEmbed = new Discord.MessageEmbed()
 .setColor('RANDOM')
.setImage(target.user.displayAvatarURL({dynamic: true}))

 message.channel.send(avatarEmbed)
    } else{
      message.channel.send(target.user.displayAvatarURL({dynamic: true}))
    }
     }
}