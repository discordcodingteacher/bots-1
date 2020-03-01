const db = require('quick.db');
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => { 
    let user = message.mentions.members.first() || message.author;

    let bal = await db.fetch(`daily_${message.guild.id}_${user.id}`);

    if (bal === null) bal = 0;

    let moneyEmbed = new Discord.RichEmbed()
      .setTitle(`**Balance Comnand**`)
      .setColor("#FFFFFF")
      .addField("Wallet", `${bal}`)
    return message.channel.send(moneyEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bal'],
  permLevel: ""
};

exports.help = {
  name: "balance",
  category: "money",
  description: "Shows you the money commands",
  usage: ""
}