

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

//exercise maximum value

function MaximumValue(number1, number2){
    if (number1 > number2){
        console.log(`This is the greater number: ${number1}`);
    }else if(number2 > number1){
        console.log(`This is the greater number: ${number2}`);
    }else {
        console.log('They are equalsss')
    }
};
MaximumValue(1022,120);

function MaximumValueTwo(number1, number2){
    if (number1 > number2){
        return number1;
    }else if(number2 > number1){
        return number2;
    }else {
        return 'They are equals';
    }
};

console.log(MaximumValueTwo(33,33));

// if the condition is simple just to know what number is greater using Conditional operator(ternary)

function MaximumValueThree(number1, number2){
return (number1 > number2) ? number1 : number2;
};

console.log(MaximumValueThree(100,1011));


//exercise - return if is landscape or portrait 

function isLandscape(width, height){
    return (width > height);
};

console.log(isLandscape(111,11));


//exercise fizzbuzz
// I created almost correct but the order of the if`s was wrong and I had to first validate if it was a number
// then if the number was divisible by 3 and 5 than the rest of the problem
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
        return NaN;
    
    if((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if(input % 5 === 0)
        return 'Buzz';

    if((input % 3 !== 0) || (input % 5 !== 0))
        return input;
   
};



// Exercise Demerit Points
//speed limit = 70 
// if the speed is under or equal to 70 get OK message
// for every 5 kilometers above 70 the driver will get 1 point
//if gets more then 12 points so the license suspended
//tips: prefer not to use direct numbers on the validations like (speed > 80) instead that use a constant wich should be const speedLimit (speed > speedLimit)


console.log('');
console.log('Exercise speed limit MY RESOLVE');
console.log('');


let results = checkSpeed(130);
console.log(results);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed > speedLimit){
        const points = Math.floor((speed - speedLimit) / kmPerPoint);        

        if(points < 1){
            return 'Ok';
          }else if (points >= 1 && points <= 12){
            return points;
          }else{
            return 'License suspended';
          }
    };

    if(speed <= speedLimit)
    return 'Ok';  
};


console.log('');
console.log('Exercise speed limit PROFESSOR RESPONSE');
console.log('');


checkSpeed2(130);

function checkSpeed2(speed) { 
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint){
        console.log('OK');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12)
        console.log('Liscense Suspended');
    else
    console.log('Points', points);
}


// exercise even and odd
//

showNumbers(10);
showNumbersTwo(5);
// my way
function showNumbers(limit){
    let i = 0;
    while(i <= limit){
    if(i % 2 === 0){
        console.log(i, ' EVEN');
    }else console.log(i, ' ODD')
    i++;
    }
};

// professors way
function showNumbersTwo(limit){
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'even' : 'odd';
        console.log(i, message);
    }
    
}


//exercise
//takes an array and return a number of truthy elements in this array
// list of falsy in JS: undefined, null, '', false, 0, NaN

console.log('');
console.log('Exercise count Truthy');
console.log('');



const array = [4, 6, null, 7, 'igor', '', 3, NaN]
console.log(countTruthy(array));

function countTruthy(array) {
    let quantity = 0;
    for(let item of array){
        if(item){
            quantity++
        }
    }
    return quantity;
};

// node command to watch the code on console: node --watch index.js 

//exercise

console.log('');
console.log('Exercise String Properties');
console.log('');



