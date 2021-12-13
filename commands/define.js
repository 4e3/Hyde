const Discord = require("discord.js");
const urban = require("urban");

module.exports = {
name: "define",
cooldown: 3,
aliases: [],
description: "urdan",
permissions: [],
  execute: async (client, message, args, cmd, Discord) => {
urban(args).first(json => {

    if (!json) return message.channel.send({
      embed: {
        "description": "Nothing found :sweat: ",
        "color": 0xFF2222
      }
    });

    let embed = new Discord.MessageEmbed()
      .setColor(0x56aaff)
      .setDescription(json.definition)
      .addField('Example', json.example)
      .addField(`Upvotes`, json.thumbs_up, true)
      .addField(`Downvotes`, json.thumbs_down, true)
      .setFooter('Powered by Urban Dictionary')
      .setTitle(json.word);

    message.channel.send(embed);
});
  }
}