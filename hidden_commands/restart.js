module.exports = {
	name: 'restart',
	aliases: [],
  cooldown: 0,
  description: "Restart the bot.",
  usage: "",
  permissions: [],
	execute: async (client, message, args) => {
		if (message.author.id !== '572545821849944076') {
			return message.channel.send('You cannot use this command!');
		}
		await message.channel.send('Restarting bot...');
		return process.exit();
	},
};