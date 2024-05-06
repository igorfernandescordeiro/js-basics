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

const numbers1 = [1, 2, 3, 4, 5, 6];


console.log(numbers1.includes(1));

function includes(array, searchElement) {

    for (const element of array) {
        if (element === searchElement){
            return true;
        };
    }
    return false;
};

// this was my first attempt, but does not work because I was trying to return true inside the callback function of the forEach method.
// in this case I had to create a variable then set it as false and set true inside the callback function if my condition for each element gets true

function includes2(array, searchElement) {
    let found = false;

    array.forEach(element => {
        if(element === searchElement){
            found = true;
        }
       
    });
    return found;
};


console.log(includes(numbers1, 8));
console.log(includes2(numbers1, 8));

//
//EXERCISE EXCEPT
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE EXCEPT')
console.log('-----------------------------------------------------------')


