const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args, level) => {
   // const duration = moment.duration(this.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
 const duration = moment.duration(client.uptime).format(" D [day], H [hours], m [minute], s [second]");
  let embed = new Discord.RichEmbed()
  .setTitle('D-gen Stats')
  .addField('Ram Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField('Uptime', `${duration}`, true)
  .addField('Users', `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField('Servers', `${client.guilds.size.toLocaleString()}`, true)
  .addField('Channels', `${client.channels.size.toLocaleString()}`, true)
  message.channel.send(embed)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'stats',
	category: 'Miscelaneous',
	description: '',
	usage: ''
};