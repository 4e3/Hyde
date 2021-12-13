module.exports = {
    name: 'botinfo',
    cooldown: 5,
    aliases: [],
    description: 'sadasdBot commandssadsa',
    permissions: [],

    execute(client, message, args, cmd, Discord) {
      var gEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setAuthor('Client Ping')
 .addField('Bot Name', `Name: ${client.user.tag}`, true)
 .addField('Client Ping', `Ping: \`${Date.now() - message.createdTimestamp}\` ms`, true)
 .addField('Server\'s', `Currently in ${client.guilds.cache.size} servers`)
 .addField('Developer', 'rev ❄️#8182', true)

      message.channel.send(gEmbed)
    }

}