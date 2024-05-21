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

const circle = {
   radius: 1,
   get area() {
      return Math.PI * this.radius * this.radius;
   }
};
circle.radius = 2;
console.log(circle.area);


//
//EXERCISE ERROR HANDLING
//
console.log('-----------------------------------------------------------')
console.log('             EXERCISE ERROR HANDLING')
console.log('-----------------------------------------------------------')

try {
   const numbers = [1, 2, 3, 4, 1, 4, 4];
   const count = countOccurrences(null, 1);
   console.log('Count Ocurrences function: ' + count);
}
catch(e) {
   console.log(e.message);
}



function countOccurrences(array, searchElement) {
   if (Array.isArray(array)) {
      return array.reduce((accumutale, current) => {
         return (current === searchElement) ? accumutale + 1 : accumutale
     }, 0);
   } throw new Error('An array is missing');
};