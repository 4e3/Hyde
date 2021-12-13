const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
    name: 'scramblewins',
    cooldown: 5,
    aliases: [],
    description: "hisssss",
    permissions: [],
    async execute(client, message, args, cmd, Discord) {
      const wins = db.get(`${message.author.tag}_wins`)

      if(wins === null) wins = 0;

      var lolEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}\'s scramble wins`)
      .setDescription(`You have ${wins} wins`)

      message.channel.send(lolEmbed)
    }
}