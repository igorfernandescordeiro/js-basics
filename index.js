

// let person = {
//     name: 'Igor',
//     age: 33,
//     club: null
// };

// person.age = 34;
// person['name'] = 'Cordeiro';
// const selection = 'club';
// person[selection] = 'Vitória';

// console.log(person.age);
// console.log(person.name);
// console.log(person.club);




let selectedColors = [
    'red',
    'blue'
];

console.log(selectedColors);
console.log(selectedColors[1]);

selectedColors[2] = 'green';

console.log(selectedColors);

function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
};


greet('Igor', 'Cordeiro');


function square(number){
    return number * number;
};

let result = square(3);

console.log(`The result of the square funciton is: ${result}`);

console.log(' ');
console.log('---------------------------------------------------');
console.log(' ');
console.log(2**4)

//ternary
let points = 100;
let type =  points >= 100 ? 'gold' : 'silver';

console.log(type);

let x=10;
let y=x++;
console.log(y)

console.log(' ');
console.log('---------------------------------------------------');
console.log(' ');
console.log(2**4)

let hour = 19;
if ( hour >= 6 && hour < 12){
    console.log('Good morning!');
}else if ( hour >= 12 && hour < 18){
    console.log('Good afternoon');
}else{
    console.log('Good evening!');
}

let role = '';

switch (role) {
    case 'guest':
        console.log('You are a guest');
        break;
    
    case 'moderator':
        console.log('You are a moderator');
        break;

    default:
        console.log('Unknown user');
}

if(role === 'guest'){
    console.log('You are a guest');
} else if (role === 'moderator'){
    console.log('You are a moderator');
} else console.log('Unknown user');


//// about loop

// for loop
for (let i = 0; i <5; i++){
    console.log('Test!!!', i);
}

for (let i = 5; i >= 1; i--){
    if (i % 2 !== 0) console.log('odd numbers with for loop: ', i);
}

// while loop

// let i = 0;
// while (i <= 5){
//     if (i % 2 !== 0) console.log('odd numbers with while loop: ', i);
//     i++;
// }

// do-while loop
// the difference between  "do-while" and "while" is that in "Do While" statement are execute at least once.
//because the condition  of execution is checked after executing the block code.



    // let i = 9;
    // do{
    //     if (i % 2 !== 0) console.log('odd numbers with while loop: ', i);
    //     i++;
    // } while (i <= 5);

// Infinite loops can crash your browser or make your computer very slow
// while  (i > 1){
//     console.log(i);
// }


// for-in loop is used to iterate over the properties of an object
const person = {
    name: 'Igor',
    age: 30
};
for (let key in person) {
    console.log(key + ': ' + person[key]);
};

const colors = ['red', 'blue', 'green'];
for (let index in colors){
    console.log(index + ': ' + colors[index]);
};

// for-of  loop is used to iterate over the elements or itens in an array

for(let color of colors){
    console.log(color);
};

// break and continue 

let i = 0; 
while (i <= 10){
    // if(i === 5) break;
    if(i % 2 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
};