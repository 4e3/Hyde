const Discord = require("discord.js")

const ms = require('ms')

const mongodb = require("mongoose")

const prefix = process.env.PREFIX



module.exports = async (Discord, client, message) => {

  


  


    
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if(message.author.bot) return;
  


  


  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();


  const command = client.hidden_commands.get(cmd) || client.hidden_commands.find(a => a.aliases && a.aliases.includes(cmd)
  );

if(!command) return;

if (!['572545821849944076', '878332642888663080'].includes(message.author.id)){
  return message.delete();
}
    
  






  if (command) command.execute(client, message, args, cmd, Discord);

}