module.exports = {
    name: 'status',
    cooldown: 0,
    aliases: [],
    usage: "<type> <status>",
    permissions: [],
    description: 'changes status',
    execute(client, message, args, cmd, Discord){
   if (!'572545821849944076'.includes(message.author.id)) {
    message.delete() }

if (args[0] === "playing"){
    types = 0
} else if (args[0] === "streaming") {
    types = 1
} else if (args[0] === "listening") {
    types = 2
} else if (args[0] === "watching") {
    types = 3
} else if (args[0] === "competing") {
    types = 5
} else if (args[0] === "reset") {



    
} else {
    return message.channel.send('Invalid activity type.')
}
//here you tell the bot what the activity is
    args.shift()
    content = args.join(' ')
    client.user.setPresence({
        activity: {
            name: content,
            type: types
        }
    })
    message.channel.send('Status changed succesfully')

    }

}