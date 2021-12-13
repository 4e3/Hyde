const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client
const mongoose = require("mongoose")
const fs = require('fs');




var http = require('http');
 http.createServer(function (req, res) { res.write('omg actually working loop??!?!?/!1'); res.end(); }).listen(8080);




client.commands = new Discord.Collection();
client.events = new Discord.Collection();





['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
});

mongoose
.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB")
})
.catch((err) => {
  console.log(err);
})


client.on("unhandledRejection", (reason, p) => {
    console.log(" [antiCrash] :: Unhandled Rejection/Catch");
    // console.log(reason, p);
});
client.on("uncaughtException", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch");
    // console.log(err, origin);
});
client.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
    // console.log(err, origin);
});
client.on("multipleResolves", (type, promise, reason) => {
    console.log(" [antiCrash] :: Multiple Resolves");
    // console.log(type, promise, reason);
});





client.login(process.env.DISCORD_TOKEN);

