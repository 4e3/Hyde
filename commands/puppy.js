const randomPuppy = require('random-puppy');
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "puppy",
    usage: [""],
    aliases: [],
    description: "Get a cute puppy",
    permissions: [],
    cooldown: 5,

    // Execute contains content for the command
    async execute(client, message, args, cmd, Discord){
            let url = await randomPuppy('dogpictures');
            let l = new MessageEmbed()
            .setTitle("Doggo :heart_eyes:")
            .setImage(url)
          message.channel.send(l)

    }
}