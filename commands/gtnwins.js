const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
    name: 'gtnwins',
    cooldown: 5,
    aliases: [],
    usage: "",
    description: "hissssass",
    permissions: [],
    async execute(client, message, args, cmd, Discord) {
      const wins = db.get(`${message.author.id}_gtnwins`)

      if(wins === null) wins = 0;

      var lolEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}\'s GTN wins`)
      .setDescription(`You have ${wins} wins`)

      message.channel.send(lolEmbed)
    }
}