module.exports = {
    name: 'uptime',
    cooldown: 5,
    aliases: [],
    description: 'sadasclears messages!',
    permissions: [],
    async execute(client, message, args, cmd, Discord) {
      var uptime = new Date(message.client.uptime);
      const days = Math.floor(message.client.uptime / (60 * 1000 * 60 * 24));
      var uptimeEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription(`I have been up for ${days} days, ${uptime.getHours()} hours, ${uptime.getMinutes()} minutes, ${uptime.getSeconds()} seconds.`)
    
 message.channel.send(uptimeEmbed)

    }
}