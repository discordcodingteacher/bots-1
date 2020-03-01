exports.run = async (client, message, args, level) => {
    message.channel.send({embed: {
      title:'Invite',
      color: 0x00EEDC,
      // description:'invite bot',
      fields: [{
        name:' Click this Invite Link below to add bot to your server!',
        value: '[Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=682704122008698966&permissions=8&scope=bot)',
         
      }],
      footer: {
text: `${client.user.username} has been made by doodle#8133`
}
    }})
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'invite',
	category: 'Invite link',
	description: 'This is used to invite bot to your server!',
	usage: 'Invite bot to your server'
};