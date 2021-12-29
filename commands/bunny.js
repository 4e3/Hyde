const animals = require('random-animals-api'); 
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "bunny",
    usage: [""],
    aliases: [],
    description: "Get a cute bunny",
    permissions: [],
    cooldown: 5,

    // Execute contains content for the command
    async execute(client, message, args, cmd, Discord){
            let url = animals.bunny().then(url => message.channel.send(url))
            /*l = new MessageEmbed()
            .setTitle("Bunne :heart_eyes:")
            .setImage(url)
            message.channel.send(l)*/

            

    }
}