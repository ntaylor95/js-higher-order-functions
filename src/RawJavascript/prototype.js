const obj1 = function(title){
    this.Title = title;
    this.build = function() {
        console.log(this.Title)
    }
}

const test = new obj1("Nicole");
test.build();

const test2 = new obj1("Two");
test2.build();

const test3 = Object.create(obj1.prototype);
test3.Title = "My New Title";
test3.build = (t) => {
    console.log(t);
};
test3.build("Hello God");