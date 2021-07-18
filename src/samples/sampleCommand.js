const CommandBase = require("../classes/CommandBase");

class CommandName extends CommandBase {
  constructor(client) {
    super(client, {

    }, {

    });
  }

  async run(message, args) {
    return this.test();
  }
}

module.exports = CommandName;