

let person = {
    name: 'Igor',
    age: 33,
    club: null
};

person.age = 34;
person['name'] = 'Cordeiro';
const selection = 'club';
person[selection] = 'Vitória';

console.log(person.age);
console.log(person.name);
console.log(person.club);




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