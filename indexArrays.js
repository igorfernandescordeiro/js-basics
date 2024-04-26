// Here we will learn how to manipulate arrays... like adding new elements, finding, removing, splitting and combining.

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