const EventBase = require("../base/EventBase");

class ReadyEvent extends EventBase {
  constructor(client) {
    super(client);
  }

  async run() {
    
  }
}

module.exports = ReadyEvent;