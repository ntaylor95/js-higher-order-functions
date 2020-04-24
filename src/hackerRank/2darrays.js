const hourglass = () => {
    var hourglassArray = [];
    
    // 6x6 2d Array
    const ar = [
        [-9, -9, -9, 1, 1, 1],
        [0, -9, 0, 4, 3, 2],
        [-9, -9, -9,  1, 2, 3],
        [0, 0, 8, 6, 6, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    for (var i = 0; i < ar.length; i++){
        // check if column index out of range
        const max = i+2;
        if (max >= ar.length) {
            break;
        }

        console.log(ar[i]);
        
        for (var j = 0; j < ar[i].length; j++)
        {
            // check if row index out of range
            if (j+3 > ar[i].length) {
                break;
            }
    

            const hour1 = ar[i].slice(j,j+3);
            console.log(hour1);

            const hour2 = ar[i+1].slice(j+1,j+2);
            console.log(hour2);

            const hour3 = ar[max].slice(j,j+3);
            console.log(hour3);

            const test = hour1.reduce(sum) + hour3.reduce(sum) + hour2[0];

            hourglassArray.push(test);

            console.log(hourglassArray);
        }
    }

    console.log(Math.max(...hourglassArray));
}

function sum(prev, next) {
    return prev + next;
}


hourglass();