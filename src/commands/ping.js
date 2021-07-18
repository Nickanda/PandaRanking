const CommandBase = require("../classes/CommandBase");

class PingCommand extends CommandBase {
  constructor(client) {
    super(client, {

    }, {

    });
  }

  async run(message, args) {
    return this.test();
  }
}

module.exports = PingCommand;