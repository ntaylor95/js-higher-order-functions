const minBribes = (arr) => {
    arr = [1,2,3,6,4,5];
    var cnt = 0;

    var position = arr.length;
    const bribeMax = 2;
    var max = 10;

    // arr.map((value, index) => {

    // });

    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != position) {
            cnt++;
        }

        if (arr[i-1] != position) {
            cnt++;
        }

        max--;
    }

    return cnt;
}

minBribes();