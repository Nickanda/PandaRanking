class ClientFunctions {

	constructor(client) {

		this.client = client;

	}

	permLevel(message) {

		let permlvl = 0;
		const permOrder = this.client.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

		while (permOrder.length) {

			const currentLevel = permOrder.shift();

			if (message.guild && currentLevel.guildOnly) continue;
			if (currentLevel.check(this.client, message)) {

				permlvl = currentLevel.level;
				break;

			};

		};

		return permlvl;

	}

	getSettings(type = "guild", guild) {

		if (!guild) return console.warn("getSettings must be ran with a settings parameter!");

		this.client.settings[type]

	}

}