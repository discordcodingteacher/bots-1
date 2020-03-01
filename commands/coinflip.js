const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
      var coinflip = ['Heads!','Tails!'];
      message.channel.send(coinflip[Math.floor(Math.random () * coinflip.length)]);
}
   
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'coinflip',
	category: 'random outcome',
	description: 'This is used to genrate a random flip!',
	usage: 'Heads or tails'
};