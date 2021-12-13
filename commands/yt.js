const yts = require('yt-search');

module.exports = {
    name: 'yt',
    cooldown: 5,
    aliases: [],
    description: "Search on YouTube",
    permissions: [],
    async execute(client, message, args, cmd, Discord) {
        if (!args.length) return message.reply('No search query given') //Checks if the user gave any search queries
        const searched = await yts.search(args.join(' ')); //Searches for videos
        message.reply(!searched.videos.length ? 'No Results' : searched.videos[0].url); //Sends the result
    }
}