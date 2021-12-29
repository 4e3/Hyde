const disbut = require("discord-buttons")

module.exports = {
 name: "invite",
 cooldown: 5,
 usage: "",
 aliases: [],
 description: "Invite for the bot",
 permissions: [],
execute: async(client, message, args, cmd, Discord) => {
  
      let button = new disbut.MessageButton()
      .setStyle("url")
      .setLabel("Invite")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=917838767719583836&permissions=133152&scope=bot")
        var a = new Discord.MessageEmbed()
        .setTitle("Invite me to your server!")
        .setColor("GREEN")
        .setDescription("Click the button below.")
        message.channel.send(a, button)

}
}