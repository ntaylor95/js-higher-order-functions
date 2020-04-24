const class1 = function() {};
class1.prototype.build = (t) => {
    console.log(`This is my test: ${t}`);
}

const class2 = function() {};
clone(class1, class2);
const myClass = new class2();


function clone(source, destination) {
    for (var attr in source.prototype) {
        destination.prototype[attr] = source.prototype[attr];
    }
}

myClass.build('Stuff');
class2.prototype.build = (t) => {
    console.log('More Stuff');
}
myClass.build('Nicole');
class2.prototype.build = (t) => {
    console.log('School');
}
myClass.build('Never Going Back');