const Discord = require('discord.js'); // defining Discord


module.exports = {
    name: "spotifysearch",
    cooldown: 5,
    aliases: [],
    description: "idek",
    permissions: [],

    async execute(client, message, args, cmd, Discord){
        let msglink = args.join('%20') // we're joining the args using %20, so if the args are Hello World it would be Hello%20World
        let msg = args.join(' ') // we're joining the args using a space. If you don't have the space Hello World would be HelloWorld
let noEmbed = new Discord.MessageEmbed() // making the embed
        .setColor('RED')
        .setDescription('Please give me a song name to search')

if(!args[0]) return message.channel.send(noEmbed).then(a => a.delete({ timeout: 5000 })) // if there is not args[0] stop reading the code and send that message.

        let embed = new Discord.MessageEmbed() // making the embed
        .setColor('GREEN')
        .setDescription(`[${msg}](https://open.spotify.com/search/${msglink})`) // this is how you make a hyperlink ONLY IN DESCRIPTIONS [message](link), the ${} is used to call a variable in a string. You can only use it when using backticks.

        message.channel.send(embed) // sending the embed
    }
}