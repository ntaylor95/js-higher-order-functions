const solution = (numbers, target) => {
    var n = numbers;
    var s = target;

    //numbers contains at least 2 numbers that sum to the target
  
  	//contains at least 2 numbers that sum to the target - got it...contains..
  
  	// check if less than 2 numbers
  	if (numbers.length < 2) return false;
 
    var sum = n.reduce((a,b) => {
    	return a+b;
    },0);

    console.log(sum);
    console.log(target);
  
   //check if sum is less than target
   if (sum < target) return false;
  
  if (sum === target) return true;
  
   for (var i = 0; i < numbers.length; i++) {
     var currentNumber = numbers[i];
     
     if (i + 1 < numbers.length) {
       for (var j = i+1; j < numbers.length; j++) {
         if (currentNumber +  numbers[j] === target) return true; 
       }
     }
   }
  
   return sum === s;
};

solution([1,2,3], 6);