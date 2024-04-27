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

