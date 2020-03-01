exports.run = async (client, message, args, level) => { 
  const fs = require('fs')
// const msg = await message('Locating Ping');
// 	msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  
  fs.readFile('hulu.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
  var facts = [".com", "use", "express.gmail.com"]; 
var fact = Math.floor(Math.random() * facts.length);
 message.channel.send(facts[fact]);
  })
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'ping',
	category: 'Miscelaneous',
	description: 'For checking response time',
	usage: 'ping'
};