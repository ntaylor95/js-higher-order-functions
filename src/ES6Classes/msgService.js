const myReceiver = require('./Receiver');
const Emitter = require('./Emitter');
//import Receiver from './Receiver';
//import Emitter from './Emitter';

const handleMsgs = (messages) => {
    Receiver = new Receiver(messages);
    Emitter = new Emitter();

    const myReceiver = Receiver;
    const myEmitter = Emitter;

    myEmitter.setEvent(myReceiver.ping);
    myEmitter.trigger();
  
    console.log(myReceiver.messages);
}

handleMsgs(["Hi", "Hola", "Bonjour"]);