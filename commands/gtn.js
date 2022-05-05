const { MessageCollector, MessageEmbed } = require('discord.js');
const db = require("quick.db");
module.exports = {
    name: 'gtn',
    cooldown: 3,
    aliases: [],
    usage: "",
    description: 'Play guess the number',
    permissions: [],
    
    execute : async(client, message, args, cmd, Discord) => {

      if(message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
        let number = Math.ceil(Math.random() * 10000);
        let finished = false;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`Guess The Number`)
            .setDescription(`Guess a number (1-10000), you have \`1 minute\``)
            .setColor('RANDOM')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        )

        let collector = new MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 60000,
        });

        let tries = 0;

        collector.on('collect', async(msg) => {
            if(finished == false) {
                let split = msg.content.split(/ +/);
                let attempt = split.shift();

                if(isNaN(attempt)) return message.reply(`You must choose an actual number`);

                tries++;
    
                if(parseInt(attempt) !== number) return message.reply(`That is incorrect. Please choose again (My number is ${parseInt(msg) < number ? 'higher' : 'lower'} than ${parseInt(msg)})`)
    
                finished = true;
                db.add(`${message.author.id}_gtnwins`, "1")
                message.channel.send(
                    new MessageEmbed()
                    .setTitle(`Correct`)
                    .setDescription(`${parseInt(msg)} is correct! Use h!gtnwins to check your wins.`)
                    .setFooter(`It took you ${tries} times to get it`)
                    .setTimestamp()
                    .setColor('GREEN')
                )
            }
        });
        
        collector.on('end', async(collected) => {
            if(finished == false) return message.reply(`You timed out!`);
        });

      } else{
        var eembed = new MessageEmbed()
  .setTitle("Permission Error")
  .setDescription("The`EMBED_LINKS` permission is required to run this command")
  .setColor("RED")
  .setTimestamp()
  message.channel.send(eembed)
      }
    }
}