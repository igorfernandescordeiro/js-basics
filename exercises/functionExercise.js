//
//EXERCISE SUM OF ARGUMENTS
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE SUM OF ARGUMENTS')
console.log('-----------------------------------------------------------')


// create a function that will recive a parameter with the spread operator
// and when we pass an array whe should sum the values and return it
// but we can pass only numbers and should return the sum as well

function sum(...items) {
   if (items.length === 1 && Array.isArray(items[0])){
    items = [...items[0]];
   }

   return items.reduce((a,b) => a + b);
};

console.log(sum([1,2,3]));


//
//EXERCISE AREA OF CIRCLE
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE AREA OF CIRCLE')
console.log('-----------------------------------------------------------')