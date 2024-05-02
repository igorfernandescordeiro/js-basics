// Here we will learn how to manipulate arrays... like adding new elements, finding, removing, splitting and combining.

//
//ADDING ELEMENTS
//
const numbers = [3, 4];
console.log(numbers);


// adding elements to the
// End , here I just add how many argumetns I want to the right of the array
numbers.push(5,6);
console.log(numbers);

// Beginning , with unshift I push the entire array to de right and add the arguments in the the left
numbers.unshift(1,2);
console.log(numbers);

// Middle , with this method splice we can add in the middle or in any positition that I want
// the first argument is the position that I want do start to add or remove itens from this array
// the second one is to delete but in this example is 0, so I'll not delete anything
// and the others arguments are the ones that I want to add based on the position that I informed
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);


//
//FINDING ELEMENTS (primitives)
//

const numbers1 = [1, 2, 3, 4, 1];

//I pass as an argument the element I want to know the posistion in the array
// and if this element does not exist it will return -1

console.log(numbers1.indexOf(9)); // -1 
console.log(numbers1.indexOf(1)); // here returns position 0

// in this case will return the last index of the given element
console.log(numbers1.lastIndexOf(1)); // it will return the position 4 of the array

// with this method includes returns true of false if the element exist or not in the array
console.log(numbers1.includes(1));

// all these methods hava a second parameter which is optional and that is the starting index
// 
console.log(numbers1.indexOf(1));
// here I add the second parameter which is to start to look at the second position which is the number 3 in the array
// so the result will be 4, because the other 1 is in the position 4
console.log(numbers1.indexOf(1, 2));

//
//FINDING ELEMENTS (Reference Types)
//


const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];
// the find returns the first element that matches this criateria
const course = courses.find(function(course) {
    return course.name === 'a';
});
// the findIndex return the index of the element that it founds or return -1 if it not found
const courseIndex = courses.findIndex(function(course) {
    return course.name === 'b';
});


console.log('Course: ', course);
console.log('Index Course: ', courseIndex);


//
//ARROW FUNCTIONS
//

const course2 = courses.find(function(course) {
    return course.name === 'a';
});
// the arrow function could be write in this way getting the name function off and adding a arrow => after the parameter
const course3 = courses.find( (course) => {
    return course.name === 'a';
});

// this is the cleaner way to write a arrow function
const course4 = courses.find( course => course.name === 'a');

//
//REMOVING ELEMENTS
//

const numbers2 = [1, 2, 3, 4, 5, 6, 7];

// Remove the last element of an array with pop()

const last = numbers2.pop();
console.log('Using the method pop: ', last);
console.log('Now the array numbers2 is: ', numbers2);

// Remove the first element of an array with shift
const first = numbers2.shift();
console.log('Using the method shift: ', first);
console.log('Now the array numbers2 is: ', numbers2);

// Remove an element of the middle with splice

numbers2.splice(2, 1); // the first argument is to choose the index that you want to remove and second one is the quantity you want to remove
// for example if you put like this (1, 3), meaning that you want to remove 3 elements starting of the second element of the array
console.log('Using the method splice to remove instead adding: ', numbers2);


//
//EMPTYING AN ARRAY
//

const numbers3 = [1, 2, 3, 4];
const numbers4 = [1, 2, 3, 4];
const numbers5 = [1, 2, 3, 4];

// can truncate the array with lenght 
numbers3.length = 0;
console.log(numbers3);


// using the splice method, starting by the first element of the 
console.log(numbers4);

numbers4.splice(0, numbers4.length);
console.log(numbers4);

// using pop() in a loop it will removing the last element until the array is empty

while (numbers5.length > 0)
numbers5.pop();

console.log(numbers5);


//
//COMBINING OR SLICING AN ARRAY
//

const first1 = [1, 2, 3];
const second = [4, 5, 6];

const combined = first1.concat(second);
console.log(combined);
// here the first argument is the index where you want to start keeping the values in the array and the second argument is the index at which it should be removed from the array from now on.
const slice = combined.slice(1, 4);
console.log(slice);
// if the type is primitive or reference it will be copied what is necessary.


//
//THE SPREAD OPERATOR
//

const first2 = [1, 2, 3];
const second1 = [4, 5, 6];
// using '...array', you spread each element and return then.
// and it is possible to add how many arrays or variables that you want as the example below.

const combined2 = [...first2, 'a', ...second1];

console.log(combined2);

const copy = [...combined2]; // use this way to copy in a simpler way


//
//ITERATING AN ARRAY
//

for (let number of numbers){
    console.log('Iterating using for of: ', number);
};

numbers.forEach(function(number){
    console.log('Iterating using forEach: ', number);
});

//using arrow function

numbers.forEach((number, index) => {
    console.log('Iterating using forEach in a arrow function: ', number, ' and its index is: ', index );
});

//
//JOINING ARRAYS
//

const numbers6 = [1, 2, 3];

const joined = numbers6.join('-');
console.log(joined);

const message = 'This is my first message';

const parts = message.split(' ');
console.log(parts);
console.log(parts.join('-'));

//
//SORTING ARRAYS
//

const numbers7 = [2, 1, 3];
numbers7.sort();
console.log(numbers7);

numbers7.reverse();
console.log(numbers7);

const courses1 = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'}
];

courses1.sort(function(a, b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(courses1);

//
//TESTING THE ELEMENTS IF AN ARRAY
//

//we have two new methods in JS called every and some

const numbers8 = [1, 2, 3];
const numbers9 = [1, 2, 3, -1];

//the every() verify if there is one negative number it will return false
const allPositive = numbers8.every(function(value){
    return value >= 0;
});
// the some() if there is one positive number it will return true
const atLeastOnePositive = numbers8.some(function(value){
    return value >= 0;
});
console.log(allPositive);
console.log(atLeastOnePositive);

//
//FILTERING AN ARRAY
//