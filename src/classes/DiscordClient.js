const bloxy = require("bloxy");
const { Client } = require("discord.js");
const Sequelize = require("sequelize");

const ClientFunctions = require("./ClientFunctions.js");
const Logger = require("./Logger.js");
const RobloxFunctions = require("./RobloxFunctions.js");

class DiscordClient extends Client {
  constructor(options = {}) {
    super(options);

    this.functions = new ClientFunctions(this);
    this.robloxFunctions = new RobloxFunctions();
    this.roblox = new bloxy.Client();
    this.logger = new Logger();
  }

  initiate() {
    this.login().then(() => {

    });
  }
}

module.exports = DiscordClient;