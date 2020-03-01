exports.run = async (client, message, args, level) => {
    // var embed = new Discord.RichEmbed()
    // .setTitle("Test")
    // .addField("Test", 'test' , true)
    
    message.channel.send({embed: {
      title: "**__Help Command's__**",
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
        name: '**-hulu**',
        value: 'This command sends a hulu account to your dms!'
      }, {
        name: '**-nordvpn**',
        value: 'This command sends a nordvpn account to your dms!'
      }, {
        name: '**-nitro**',
        value: 'This command sends you a unchecked nitro code in your dms!'
      }, {
         name: '**-fortnite**',
        value: 'This command sends your a fortnite account in your dms!'
      }, {
         name: '**-netflix**',
        value: 'This command sends you a netflix account in your dms!'
      }, {
         name: '**-spotify**',
        value: 'This command sends you a spotify account in your dms!'
      }, {
        name: '**-stats**',
        value: 'This command shows you the stats of the bot!'
      },{
        name: '**-invite**',
        value: 'This command gives you the invite link to the bot!'
      }, {
      name:'**-support**',
      value:'This command send you the invite link to our support server!'
      }, {
        name: '**-8ball**',
        value:'This command randomly makes an answer for your question!'
      },{
        name: '**-coinflip**',
        value: 'This command give you a heads or tails!'
      }, {
        name: '**-members**',
        value: 'This commands shows you how many people are in the server!'
      }, {
        name: '**-autorole**',
        value: 'This command automatically gives new user a role!'
      }, {
        name: '**-ban**',
        value: 'This command is used to ban a member!'
      }, { 
        name: '**-kick**',
        value: 'This command is used to ban a member!'
      }, {
        name: '**-mute**',
        value: 'This command is used to mute a member!'
      }, {
        name: '**-setbotstatus**',
        value: 'This command is used to set my status!'
      }, {
        name:'**-clear**',
        value: 'Clears messages!'
      },{
        name: '**-deletemsg**',
        value: 'This command deletes messages!'
      }, {
         name: '**-removerole**',
        value: 'Remove a users role!'
      }, {
        name: '**-setbotname**',
        value: 'Set a nickname for me!'
      }, {
        name: '**-addrole**',
        value: 'This adds a role to your server!'
      }, {
        name: '**-topfive**',
        value: 'This command gives you a high five!'
      }, {
        name: '**-economy**',
        value: 'This command shows you a list of economy commands!'
      }]
    }})
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'help',
	category: 'Miscelaneous',
	description: 'SEND YOU HELP',
	usage: 'HELP'
};