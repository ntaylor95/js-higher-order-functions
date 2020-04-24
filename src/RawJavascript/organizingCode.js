// objects contain both data and functionality
// you cannot create an instance of an object in javascript
const myFunction = {
    title: 'My Title',
    write: function() {
        console.log(this.title);
    }
}

// define the object using function will allow you t create an
// instance of the object

const thisTitle = function(t) {
    this.Title = t;
    this.write = function(t) {
        console.log(t)
    }
}

myFunction.Title = 'Toot';
myFunction.write();

const test = new thisTitle('Nicole');
test.write('Writing some text');
console.log(test['Title']);
console.log(test['write']);