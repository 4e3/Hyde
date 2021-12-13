const { MessageCollector } = require('discord.js');
const db = require("quick.db")

module.exports = {
    name : 'scramble',
    cooldown: 3,
    aliases: [],
    description: 'Attempt to unscramble the given scrambled word',
    permissions: [],

    execute : async(client, message, args, cmd, Discord) => {
        let words = ['awesome', 'hyde', 'discord', 'javascript', 'bot', 'developer'];
        let word = words[parseInt(Math.random() * words.length)];

        let scrambled = word.split('');
    
        scrambled.sort(() => (Math.random() > .5) ? 1 : -1);

        while(scrambled.join('') == word) scrambled.sort(() => (Math.random() > .5) ? 1 : -1);
        var startEmbed = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setDescription(`Your word is... \`${scrambled.join('')}\`! Unscramble the given word. You have 1 try.`)

        message.channel.send(startEmbed);
        
        const collector = new MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 60000,
            max: 1,
        });
        var correctEmbed = new Discord.MessageEmbed()
 .setColor('GREEN')
 .setDescription('That is correct! Great job!')
 .setFooter("Use h!scramblewins to check your wins!")

 var incorrectEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Your guess was incorrect. Better luck next time')

 var timeEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('You were too slow. Be faster next time!')

        collector.on('collect', async(msg) => { 
            db.add(`${message.author.tag}_wins`, "1")
            if(msg.content.toLowerCase() == word.toLowerCase())
            message.channel.send(correctEmbed)
            
           

            else return message.channel.send(incorrectEmbed);
        });

        collector.on('end', async(collected) => {
            if(collected.size == 0) message.channel.send(timeEmbed);
        });
    }
};