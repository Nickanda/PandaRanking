class EventBase {
  constructor(client) {
    this.client = client;
  }

  async test() {
    return this.client.logger.warn("The " + this.help.name + " command is working properly, but does not have a proper run function!");
  }
}

module.exports  = EventBase;