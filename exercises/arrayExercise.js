const numbers = arrayFromRange(-1, 6);

console.log(numbers);

function arrayFromRange(min, max) {
    const newArray = [];
    for (let i = min; i <= max; i++){
        newArray.push(i);
    }
    return newArray;
};