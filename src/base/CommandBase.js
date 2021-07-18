class CommandBase {
  constructor(client, conf, help) {
    this.client = client;

    this.conf = {
      disabled: conf.disabled == true && true || false,
      guildOnly: conf.guildOnly == true && true || false,
      aliases: conf.aliases || [],
      permLevel: conf.permLevel || "User",
      robloxRank: conf.robloxRank == true && true || false
    };

    this.help = {
      name: help.name || "none",
      category: help.category || "Miscellaneous",
      description: help.description || "This command has no description yet.",
      usage: help.usage || "This command does not have a proper method to be used yet."
    };
  }

  async test() {
    return this.client.logger.warn("The " + this.help.name + " command is working properly, but does not have a proper run function!");
  }
}

module.exports = CommandBase;