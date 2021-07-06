const Discord = require("discord.js");

/**
 * @class {ClientFunctions}
 * @param client 
 */

class ClientFunctions {

	constructor(client) {
		this.client = client;
	}

	permLevel(msg) {
		let permlvl = 0;
		const permOrder = this.client.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);
		while (permOrder.length) {
			const currentLevel = permOrder.shift();
			if (msg.guild && currentLevel.guildOnly) continue;
			if (currentLevel.check(this.client, msg)) {
				permlvl = currentLevel.level;
				break;
			};
		};
		return permlvl;
	}

	async getSettings(type = "guild", guild) {
		const [settings, created] = await this.client.settings[type].findOrCreate({ where: { guildId: guild.id } });
		return settings;
	}

	async awaitReply(msg, question, limit = 60000) {
		const filter = m => m.author.id = msg.author.id;
		await msg.channel.send(question);

		try {
			const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ['time'] });
			return collected.first().content;
		} catch (e) {
			return false;
		}
	}

	clean(text) {
		if (text && text.constructor.name == 'Promise') text = await text;
		if (typeof evaled !== 'string') text = require('util').inspect(text, { depth: 1 });

		text = text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203))
			.replace(this.client.token, 'You really thought you could try to get my token.')
			.replace(process.env.DISC_TOKEN, 'You really thought you could try to get my token.');

		return text;
	}

	loadCommand(comamndName) {
		try {
			const props = require(`../commands/${commandName}`);
			this.client.logger.log('Loading Command: ' + props.help.name + '. 👌');

			if (props.init) {
				props.init(client);
			}

			this.client.commands.set(props.help.name, props);
			props.conf.aliases.forEach(alias => {
				this.client.aliases.set(alias, props.help.name);
			});

			return false;
		} catch (e) {
			return `Unable to load command ${commandName}: ${e}`;
		}
	}

	serverLog(msg, color = 0x000000, description = "") {
		const embed = new Discord.MessageEmbed()
			.setAuthor(user.tag, user.displayAvatarURL())
			.setColor(color)
			.setDescription(description);

		msg.channel.send({ embed });
	}

}

module.exports = ClientFunctions;