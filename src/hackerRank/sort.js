
const solution = (denominations, amount) => {
  
    var cnt = 0;
    var total = 0;
    
    if (denominations.length < 1) return -1;
    
    // sort array from highest to lowest
    const test = denominations.sort(function(a, b) {
        return b - a;
    });
    
    if (test[0] > amount) return -1;
    
    for (var i = 0; i < test.length; i++) {
      // loop while sum is less than amount
      while (total < amount) {
        total += test[i];
        cnt++;
        
        console.log(total);
        console.log(cnt);
        console.log(test[i]);

        if (total === amount) break;
        
        if (total > amount) {
        total -= test[i];
          cnt--;
          console.log(total);
        console.log(cnt);
        console.log(test[i]);
          break;
       }
        
      
      }
      
        if (total === amount) break;
    }
    
    console.log(test);
    console.log(cnt);
    
    //troubleshooting failed test case in Visual Code
    
    return cnt;	
  };

  solution([2, 7, 11, 18, 14, 17, 12, 16, 9, 15, 3, 19], 4033);