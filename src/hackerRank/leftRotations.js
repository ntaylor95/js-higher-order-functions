const leftRotations = (arr, rotationCount) => {
    arr = [1,2,3,4,5],
    rotationCount = 2;

    const left = arr.slice(0, rotationCount);
    console.log(left);

    const right = arr.slice(rotationCount);
    console.log(right);
    
    const newArray = right.concat(left);

    console.log(newArray);

    return newArray;
}

leftRotations();