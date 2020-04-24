const solution = (messages) => {
    class Emitter {
      constructor(messages = []) {
        this.messages = messages;
        this.event = () => {};
      }
  
      setEvent(fn) {
        this.event = fn;
      }
  
      trigger() {
        this.messages.forEach(message => this.event(message));
      }
    }
  
    class Receiver {
      constructor() {
        this.messages = [];
      }
  
      ping(message) {
        console.log(`The ping message is ${message}`);
        this.messages.push(message);
      }
    }
  
    const myEmitter = new Emitter(messages);
    const myReceiver = new Receiver();
  
    myEmitter.setEvent(myReceiver.ping);
    myEmitter.trigger();
  
    console.log(myReceiver.messages);

    return myReceiver.messages;
  };

  solution(["Hi", "Hola", "Bonjour"]);