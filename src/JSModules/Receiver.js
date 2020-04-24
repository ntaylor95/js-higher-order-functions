const Receiver = function(){
    this.messages = [];
    this.ping = (message) => {
        console.log(`The ping message is ${message}`);
        this.messages.push(message);
    }
};

module.exports = {
    Receiver
}