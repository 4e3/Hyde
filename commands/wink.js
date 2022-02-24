const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'wink',
  aliases: [],
  cooldown: 5,
  description: "wink at someone",
  usage: "@user",
  permissions: [],
	execute: async (client, message, args) => {
		const url = 'https://some-random-api.ml/animu/wink';

		let response; let
			data;
		try {
			response = await axios.get(url);
			data = response.data;
		} catch (e) {
			return message.channel.send('An error occured!');
		}

		const embed = new MessageEmbed()
			.setTitle(`@${message.author.username} winks at @${message.mentions.users.first().username || message.mentions.members.first()}`)
			.setImage(data.link);


		return message.channel.send(embed);
	},
};