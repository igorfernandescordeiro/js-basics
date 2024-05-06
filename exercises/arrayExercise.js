//
//EXERCISE ARRAY FROM RANGE
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE ARRAY FROM RANGE')
console.log('-----------------------------------------------------------')
const numbers = arrayFromRange(-1, 6);

console.log(numbers);

function arrayFromRange(min, max) {
    const newArray = [];
    for (let i = min; i <= max; i++){
        newArray.push(i);
    }
    return newArray;
};

//
//EXERCISE INCLUDES
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE INCLUDES')
console.log('-----------------------------------------------------------')