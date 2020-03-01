exports.run = async (client, message, args, level) => {
    // var embed = new Discord.RichEmbed()
    // .setTitle("Test")
    // .addField("Test", 'test' , true)
    
    message.channel.send({embed: {
      title: "**__Economy Command's__**",
      color: 0x33DDFF,
      footer: {
        text: 'Made by:doodle#8133'
      },
      thumbnail: {
		url: `${client.user.displayAvatarURL}`,
	},
      // description: " Description Test",
      //go-to-talking
      fields: [{
        name: '**-weekly**',
        value: 'This command collects your weekly coins!'
      }, {
        name: '**-daily**',
        value: 'This command collects your daily coins!'
      }, {
        name: '**-addmoney**',
        value: 'This command adds money to your account'
      }]
    }})
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'economy',
	category: 'Money',
	description: 'Sends list of economy connads',
	usage: 'money'
};