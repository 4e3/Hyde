const { Client } = require('discord.js');
const fs = require('fs');

module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync('./hidden_commands/').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../hidden_commands/${file}`);
        if(command.name){
            client.hidden_commands.set(command.name, command);
        } else {
            continue;
        }
    }
}