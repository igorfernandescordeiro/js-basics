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

const numbers6 = [1, 2, 3, 4];

const output5 = move(numbers6, 0, 3);

console.log('moved array: ', output5);

// explaning how this function should work. pass an array and chose the index of the number that you want to move
// and then you pass the offset which is the position that you want to move the number that you chose by the index before
// use console.error('Invalid offset.'), when choose the off bigger than the length of the array

function move(array, index, offset) {
    const position = index + offset;

    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    let newArray = [...array];
    //this remove the element but return its value
    let numberFromArray = newArray.splice(index, 1)[0];

    newArray.splice(position, 0, numberFromArray);
    return newArray;

};

//
//EXERCISE COUNT OCCURENCES
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE COUNT OCCURENCES')
console.log('-----------------------------------------------------------')

const numbers7 = [1, 2, 3, 4, 1, 4, 4];

const count = countOccurrences(numbers7, 1);
const count2 = countOccurrences2(numbers7, 1);

console.log('Count Ocurrences function: ' + count);
console.log('SECOND Count Ocurrences function: ' + count2);

// this function should return the numbers of times that this searchElement appears in this array

function countOccurrences(array, searchElement) {
    // the reduce method return the accumulate as I set, but the function should return this result too
    // so the reduce return should be placed in a const to be returned
    const result = array.reduce((accumutale, currentValue) => {
        if (currentValue === searchElement) {
            return accumutale + 1;
        } else {
            return accumutale;
        }
    }, 0);
    return result;
};


function countOccurrences2(array, searchElement) {
    return array.reduce((accumutale, current) => {
        return (current === searchElement) ? accumutale + 1 : accumutale
    }, 0);
};


//
//EXERCISE GET MAX
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE GET MAX')
console.log('-----------------------------------------------------------')

// to help to think, every time that has an array of values and you need just a single value as the result...
//... think to use the reduce() method


const numbers8 = [1, 4, 3, 2];

const max = getMax(numbers8);
const max1 = getMax2(numbers8);
const max2 = getMax3(numbers8);

console.log(max);
console.log(max1);
console.log(max2);

function getMax(array){
    let num = 0;

    array.forEach(number =>{
        if (number > num ){
            num = number;
        }
    });
    return num;

};

function getMax2(array){
    if (array.length === 0) return undefined;
    
    return array.reduce((accumutale, current) => {
        return (current > accumutale) ? current : accumutale;

    });
};

function getMax3(array){
    if (array.length === 0) return undefined;
    let max = array[0];

    for (let i = 1; i < array.length; i++)
        if(array[i] > max)
            max = array[i];

    return max;
};

//
//EXERCISE MOVIES
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE MOVIES')
console.log('-----------------------------------------------------------')