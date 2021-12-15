

const ms = require('ms')

const cooldowns = new Map();

const quick = require('quick.db');

module.exports = async (Discord, client, message) => {

  client.on("rateLimit", () => {
    console.log(`Ratelimited in ${message.guild.name}`)    
    });

  client.on('guildCreate', guild => {
  guild.systemChannel.send('https://i.imgur.com/z3wU2tF.png').catch(x => x.return);
})

  const botdev = client.emojis.cache.find(emoji => emoji.name === "botdev");
  prefix = process.env.PREFIX


  if (!message.content.startsWith(prefix) || message.author.bot) return;



  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();


  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd)
  );


  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const current_time = Date.now();
  const time_stamps = cooldowns.get(command.name);
  const cooldown_amount = (command.cooldown) * 1000;

  //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
  if (time_stamps.has(message.author.id)) {
    const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

    if (current_time < expiration_time) {
      const time_left = (expiration_time - current_time) / 1000;

      var coolEmbed = new Discord.MessageEmbed()
      .setTitle('Cooldown')
      .setColor("RANDOM")
      .setDescription(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`)

      return message.delete().then(message.reply(coolEmbed).then(a => a.delete({ timeout: 5000 })))
    }
  }

  //If the author's id is not in time_stamps then add them with the current time.
  time_stamps.set(message.author.id, current_time);
  //Delete the user's id once the cooldown is over.
  setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);


  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]

  if (command.permissions.length) {
    let invalidPerms = []
    for (const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log(`Invalid Permissions ${perm}`);
      }
      if (!message.member.hasPermission(perm)) {
        invalidPerms.push(perm);
      }
    }
    var permembed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(`Missing Permissions: \`${invalidPerms}\``)
    if (invalidPerms.length) {
      message.delete()
      return message.channel.send(permembed)
      //message.channel.send(`Missing Permissions: \`${invalidPerms}\``).then(msg => {
      //setTimeout(() => message.delete, 5000)
      //})
      //.catch(console.error);
    }
  }

  client.on("unhandledRejection", (reason, p) => {
    console.log(" [antiCrash] :: Unhandled Rejection/Catch");
    // console.log(reason, p);
});
client.on("uncaughtException", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch");
    // console.log(err, origin);
});
client.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
    // console.log(err, origin);
});
client.on("multipleResolves", (type, promise, reason) => {
    console.log(" [antiCrash] :: Multiple Resolves");
    // console.log(type, promise, reason);
});





  if (command) command.execute(client, message, args, cmd, Discord);
}