const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'userinfo',
	aliases: ["ui"],
  cooldown: 3,
  description: "self explanatory",
  usage: "<@user>",
  permissions: [],
	execute: async (client, message, args) => {
		const user =			message.mentions.members.first()
			|| message.guild.members.cache.get(args[0])
			|| message.member;

		let status;
    const onlineEmoji = client.emojis.cache.get('937094827886145546')
    const dndEmoji = client.emojis.cache.get('937094827802259466')
    const idleEmoji = client.emojis.cache.get('937094827730931752')
    const offlineEmoji = client.emojis.cache.get('937094827542204467')
		switch (user.presence.status) {
		case 'online':
			status = `${onlineEmoji} Online`;
			break;
		case 'dnd':
			status = `${dndEmoji} Do Not Disturb`;
			break;
		case 'idle':
			status = `${idleEmoji} Idle`;
			break;
		case 'offline':
			status = `${offlineEmoji} Offline`;
			break;
		default:
			status = 'Unknown';
		}

		const embed = new MessageEmbed()
			.setTitle(`${user.user.username} stats`)
			.setColor('#f3f3f3')
			.setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
			.addFields(
				{
					name: 'Name: ',
					value: user.user.username,
					inline: true,
				},
				{
					name: 'Discriminator: ',
					value: `#${user.user.discriminator}`,
					inline: true,
				},
				{
					name: 'ID: ',
					value: user.user.id,
				},
				{
					name: 'Current Status: ',
					value: status,
					inline: true,
				},
				{
					name: 'Activity: ',
					value: user.presence.activities[0] ? user.presence.activities[0].name : 'User isn\'t playing a game!',
					inline: true,
				},
				{
					name: 'Avatar link: ',
					value: `[Click Here](${user.user.displayAvatarURL()})`,
				},
				{
					name: 'Creation Date: ',
					value: user.user.createdAt.toLocaleDateString('en-us'),
					inline: true,
				},
				{
					name: 'Joined Date: ',
					value: user.joinedAt.toLocaleDateString('en-us'),
					inline: true,
				},
				{
					name: 'User Roles: ',
					value: user.roles.cache.map((role) => role.toString()).join(' ,'),
					inline: true,
				},
			);

		return message.channel.send(embed);
	},
};