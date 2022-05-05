module.exports = (Discord, client) => {
  console.log('Hidden commands loaded.')
  client.user.setPresence({
        activity: {name: 'for h!help',
        status: 'idle',
        type: 'WATCHING'}})
}

