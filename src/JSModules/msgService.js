const Receiver = require('./Receiver');
const Emitter = require('./Emitter');

const msgService = (messages) => {
    const myReceiver = new Receiver.Receiver();

    messages.map((val, i) => {
        myReceiver.ping(val);
    });

    console.log(myReceiver.messages);

    const myNewReceiver = new Receiver.Receiver();
    const myEmitter = new Emitter.Emitter(messages);

    myEmitter.setEvent(myNewReceiver.ping);
    myEmitter.trigger();

    console.log(myNewReceiver.messages);

    console.log(myReceiver.messages);
};

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

        // just use an arrow function because of the
        // javascript context will now be bound to objects outside
        // the Receiver class
        ping = (message) => {
            console.log(`The ping message is ${message}`);
            this.messages.push(message);
        }
    }

    const myEmitter = new Emitter(messages);
    const myReceiver = new Receiver(messages);

    myEmitter.setEvent(myReceiver.ping);
    myEmitter.trigger();

    console.log(myReceiver.messages);

    return myReceiver.messages;
};

msgService(["Hi", "Hola", "Bonjour"]);
console.log('-----------------------');
solution(["Hi", "Hola", "Bonjour"]);