const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
     let reason = args.join(' ');
    if (reason.length < 1) return message.channel.send('You did not give the bot a question dumb ass bitch');
    var ball = ['It is certain.','No doubt about it.','No chance.','Fuck yea!','Maybe, time will tell.','No way.','Concentrate and try again.', ' As I see it, yes', 'Outlook good', 'Most likely', 'Better not tell you now', 'My sources say no', 'Signs point to yes', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'My sources say no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
    const embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .addField("You asked", reason)
    .addField("D-Gen determinds", ball[Math.floor(Math.random () * ball.length)])
    .setThumbnail("http://www.pngmart.com/files/3/8-Ball-Pool-Transparent-PNG.png")
    message.channel.send({embed})
}
   exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: '8ball',
	category: '8ball',
	description: 'This is a random answer command',
	usage: 'random answers'
};