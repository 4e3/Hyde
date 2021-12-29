const Discord = require('discord.js'); // defining Discord


module.exports = {
    name: "search",
    aliases: [],
    usage: "<search>",
    description: "Search",
    permissions: [],

    async execute(client, message, args, cmd, Discord){
        let msglink = args.join('+') // we're joining the args using %20, so if the args are Hello World it would be Hello%20World?q=
        let msg = args.join(' ') // we're joining the args using a space. If you don't have the space Hello World would be HelloWorld

if(!args[0]) return message.channel.send('Please give me a search query') // if there is not args[0] stop reading the code and send that message.

        let embed = new Discord.MessageEmbed() // making the embed
        .setColor('GREEN')
        .setDescription(`[Results for ${msg}](https://google.com/search?q=${msglink})`) // this is how you make a hyperlink ONLY IN DESCRIPTIONS [message](link), the ${} is used to call a variable in a string. You can only use it when using backticks.

        message.channel.send(embed) // sending the embed
    }
}