const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client();
const mongoose = require("mongoose")
const fs = require("fs")



var http = require('http');
 http.createServer(function (req, res) { res.write('Hyde is online'); res.end(); }).listen(8080);





client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.hidden_commands = new Discord.Collection();







['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
});

['hidden_c_handler', 'hidden_e_handler'].forEach(handler =>{
  require(`./hidden_handlers/${handler}`)(client, Discord);
});
  

mongoose
.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB")
})
.catch((err) => {
  console.log(err)
})








client.login(process.env.DISCORD_TOKEN);

