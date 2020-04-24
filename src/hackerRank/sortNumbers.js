const sortNumber = (numbers) => {
    numbers.sort(function(a, b) {
        return b - a;
    });

    console.log(numbers);
    console.log(numbers[0])
}

const solution = (transactions, taxRate) => {
    denominations = [1,5,10,25];
    amount = 80;
  
  var cnt = 0;
  var total = 0;
  
  // sort array from highest to lowest
  const test = denominations.sort(function(a, b) {
  	return b - a;
  });
  
  console.log(test)

  if (test[0] > total) return -1;
  
  for (var i = 0; i < test.length; i++) {
    // loop while sum is less than amount
    console.log(total);
    while (total <= amount) {
      total += test[i];
      cnt ++;

      console.log(total);
      console.log(cnt);
    }
  }
  
  return cnt;	
}

solution([10, 5, 10, 5], 1.1);
