const solution = (s) => {
// Type your solution here
s = 'vBSqhiAAiQUbjLexwOnIuHUklDdOsIfrXrwWubsIClmzwQRRCVCQttriWStJHkWaXjcchKdFdCIpTaAqFoNtTZjSHKNJkT'; ///or convert to an array and use map... let's try that
var cnt = 0;
var previous = '';
var cnts = [];

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
  
  if (previous != s[i]) {
    cnt++;
  } else {
    cnts.push(cnt);
    cnt = 0
  }
  
  previous = s[i];
}
console.log(cnts);

Math.max(...cnts);

return cnt;
};

solution();