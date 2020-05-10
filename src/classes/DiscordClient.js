const bloxy = require("bloxy");
const Discord = require("discord.js");
const Sequelize = require("sequelize");

const ClientFunctions = require("./ClientFunctions.js");

class DiscordClient extends Client {

	constructor(options = {}) {

		super(options);

		this.functions = new ClientFunctions(this);
		this.roblox = new bloxy.Client();

	}

	initiate() {



	}

}

module.exports = DiscordClient;