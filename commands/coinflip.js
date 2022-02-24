const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "coinflip",
    aliases: [],
    cooldown: 5,
    description: "Flips a coin.",
    usage: "",
    permissions: [],
    execute: async (client, message, args) => {
    const responses = ['Heads', 'Tails'];
		const response =
		responses[Math.floor(Math.random() * responses.length)];
		message.channel.send(' Flipping...').then((msg) => {
			const Embed = new MessageEmbed()
				.setTitle('You filpped a . .')
				.setColor('BLUE')
				.setDescription(
					`${response}!`,
				);
			msg.edit(Embed);
		});
    }
}