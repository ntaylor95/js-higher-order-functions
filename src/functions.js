const adder = (a) => (b) => {
    // Yea this is so simple it doesn't even need to be in a block so it could be even
    // more conciese but this makes it more obvious what is going on...
    return a + b;
};

// You can then call adder(1) which will return a new anonymous function that accepts a single argument, b... 
// you can assign that new anonymous function to a variable like addOne or in the original case validateMarkup... 
// because of how the variables are bound (or captured) in the new anonymous function a = 1 so calling that new function 
// will just add 1 to whatever single parameter is passed to that function...

const addOne = adder(1); //this is set to a fuunction
const addTwo = adder(2); //this is set to a function

console.log(`addOne(100) = ${addOne(100)}`);
console.log(`addTwo(100) = ${addTwo(100)}`);

const numberRange = (name, isRequired, minimumValue, maximumValue) => (value) => {
    if (value == null) {
      if (isRequired) {
        return `${name} is required.`;
      }
  
      return null;
    }
  
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(value)) {
      return `${name} must be numeric.`;
    }
  
    if (minimumValue != null && value < minimumValue) {
      return `${name} must be greater than ${minimumValue}`;
    }
  
    if (maximumValue != null && value > maximumValue) {
      return `${name} must be less than ${maximumValue}`;
    }
  
    return null;
  };

  const integerValidator = numberRange('My Number', true, 0, 100);
  const negativeNumverValidator = numberRange('Negative Number', true, null, -1);

  console.log(`Errors: ${integerValidator(100)}`);

  console.log(`Errors: ${integerValidator(1000)}`);

  console.log(`Errors: ${integerValidator()}`);

  console.log(`Errors: ${negativeNumverValidator(100)}`);

  console.log(`Errors: ${negativeNumverValidator(-1)}`);

  console.log(`Errors: ${negativeNumverValidator()}`);
