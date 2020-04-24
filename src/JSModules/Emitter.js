const Emitter = function(messages){
    this.messages = messages;
    this.event = () => {};
    this.setEvent = (fn) => {
        this.event = fn;
    };
  
    this.trigger = () => {
        this.messages.forEach(message => this.event(message));
    }
};

module.exports = {
    Emitter
}