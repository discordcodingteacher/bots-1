exports.run = async (client, message, args, level) => { 
  const fs = require('fs');
  var msg_ = message.content.substr(7);
  message.delete();
  message.channel.guild.members.forEach(user => {
    user.send(msg_);
    console.log(user);
  });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'dmall',
	category: '',
	description: '',
	usage: 'dmall'
}; 