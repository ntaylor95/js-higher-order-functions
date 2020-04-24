class Receiver {
    constructor() {
      this.messages = [];
    }

    ping(message) {
      console.log(`The ping message is ${message}`);
      this.messages.push(message);
    }
}

module.exports = {
  Receiver
}