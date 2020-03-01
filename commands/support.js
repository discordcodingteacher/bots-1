exports.run = async (client, message, args, level) => {
    message.channel.send({embed: {
      title:'Support invite',
      color: 0x3346FF,
      // description:'invite bot',
      fields: [{
        name:' Click this Link below to join our support server!',
        value: '[Invite Link](https://discord.gg/AmtRMBw)',
      }],
      footer: {
text: `${client.user.username} has been made by doodle#8133`
}
    }})
};
//bro are you still there?

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'support',
	category: 'Invite link',
	description: 'This the invite link to our support server!',
	usage: 'Invite to our support server'
};