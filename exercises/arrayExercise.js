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
    for (let i = min; i <= max; i++) {
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
        if (element === searchElement) {
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
        if (element === searchElement) {
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

const numbers2 = [1, 2, 3];
const numbers3 = [1, 2, 3];
const numbers4 = [1, 2, 3];
const numbers5 = [1, 2, 3, 1, 1, 1];


const output = except(numbers2, [1, 2, 6, 1, 1, 1]);
const output2 = except2(numbers3, [1, 2, 6, 1, 1, 1]);
const output3 = except3(numbers4, [1, 2, 6, 1, 1, 1]);
const output4 = except3(numbers5, [1, 2, 6]);

console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);

//this one does not work fine
function except(array, excluded) {
    index = 0;
    for (const elementArrayOne of array) {
        for (const elementToBeExcluded of excluded) {
            if (elementArrayOne === elementToBeExcluded) {
                array.splice(index, 1);
                index--;
            };
        } index++;
    }
    return array;
};

//this except2 I created and works just fine

function except2(array, excluded) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < excluded.length; j++) {
            if (array[i] === excluded[j]) {
                array.splice(i, 1);
            };
        };
    } return array;
};


// this one, chatgpt created and works just fine too

function except3(array, excluded) {
    return array.filter(element => !excluded.includes(element));
};


//this one is the professor's way

function except4(array, excluded) {
    const output = [];
    for (let element of array) {
        if (!excluded.includes(element)) {
            output.push(element);
        };
    };
    return output;
};


//
//EXERCISE MOVING AN ELEMENT
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE MOVING AN ELEMENT')
console.log('-----------------------------------------------------------')
