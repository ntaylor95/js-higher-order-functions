const solution = (s) => {

    const sTrans = s.toLowerCase();

    const test = new RegExp(s, 'i');
    console.log(test);

    var strArray = sTrans.split('');b  
    var currentCount = 0;
    var prev = '';
    var cnt = 0;

    strArray.map((value, index) => {
        if (prev != value) {
            cnt++;
        } else {
            cnt = 0;
        }

        if (cnt > currentCount) {
            currentCount = cnt;
        }

        prev = value;
    });

    console.log(currentCount);
    return currentCount
}

solution('erttewrmndsMmsdff');