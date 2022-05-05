const { MessageAttachment } = require('discord.js');
const { Type } = require('@extreme_hero/deeptype');
const clean = require('clean');
const Discord = require('discord.js')

module.exports = {
  name: 'eval',
  cooldown: 0,
  description: 'Evaluate code',
  usage: "<evaluation>",
  aliases: ["e"],
  permissions: [],

    async execute(client, message, args, cmd, Discord){

  if (!['572545821849944076', '878332642888663080'].includes(message.author.id)) {
    message.delete()
    var evalnoEmbed = new Discord.MessageEmbed()
 .setColor('RED')
 .setDescription('Due to security issues, eval() can be only used by developers.')

 message.channel.send(evalnoEmbed).then(a => a.delete({ timeout: 5000 }))
    
  } else {

    const e1 = new Discord.MessageEmbed()
      .setColor('#F04747')
      .setDescription('Provide a code to evaluate.')

    if (!args.length) {
      setTimeout(function() {
        message.delete()
      }, 3000)
      return message.channel.send(e1).then(a => a.delete({ timeout: 3000 }))
    }
    const clean = text => {
      if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      return text;
    }
    let code = args.join(' ')
    code = code.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
    let evaled;
    try {
      const start = process.hrtime();
      evaled = eval(code);
      if (evaled instanceof Promise) {
        evaled = await evaled;
      }
      const stop = process.hrtime(start);
      const response = [
        `**Output:** \`\`\`js\n${clean(evaled, { depth: 0 })}‏‏‎\n\`\`\``,
        `**Type:** \`\`\`ts\n${new Type(evaled).is}\n\`\`\``,
        `:stopwatch: ${(((stop[0] * 1e9) + stop[1])) / 1e6}ms`
      ]
      const res = response.join(`\n`);
      if (res.length < 2000) {
        await message.channel.send(res);
      } else {
        const output = new MessageAttachment(Buffer.from(res), 'output.txt');
        await message.channel.send('The output was too long so I have put the output in the .txt file below.', output)
      }
    } catch (err) {
      return message.channel.send(`**Error:** \`\`\`xl\n${clean(err)}\`\`\``);
    }

  }
}
}