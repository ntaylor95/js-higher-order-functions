const solution1 = (s) => {

    const string = "It's around August AND THEN I get an email";
    const regex = /\b[A-Z]{2,}\b/g;

    // match is AND and THEN
    var modified = string.replace(regex, function(match) {
        console.log(match);
        return match.toLowerCase();
    });

    console.log(modified);
    // It's around August and then I get an email
}

const solution2 = (s) => {
    var isUpperCase = (str) => {
        return str === str.toUpperCase();
    }

    var str = "It's around August AND THEN I get an email";

    var matched = (s) => s.split(' ').map(function(val) {
        if (isUpperCase(val) && val.length>1) {
            return val.toLowerCase();
        }

        return val;
    });

    console.log(matched(str).join(' '));
  
    //return val;     
}

solution1();
solution2();