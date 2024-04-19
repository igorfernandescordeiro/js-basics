
//lets think that we are building an app for drawing differents kinds of shapes



//Object-oriented Programing (OOP)
// if a Function is part of an object we call it method
console.log('');
console.log('Learning Object-oriented Programing (OOP)');
console.log('');

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

// circle.draw(); // calling the draw method


console.log('');
console.log('Learning Factory Function');
console.log('');
// Factory function - how to create
// we changed the keyvalues of the previous object to make the example of factory function easier to understand
// if the key and value are the same we can  remove the value and simply add the key.

//camel notation: oneTwoThreeFour
// pascal notation: OneTwoThreeFour
function createCircle(radius) {
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
};

const circle1 = createCircle(1);
console.log(circle1);

const circule2 = createCircle(2);
console.log(circule2);


//Constructor Functions 
console.log('');
console.log('Learning Constructor Functions');
console.log('');

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
};

const circle3 = new Circle(1);
console.log(circle3);

//Dynamic Nature of Objects
console.log('');
console.log('Learning Dynamic Nature of Objects');
console.log('');

const circle4 = {
    radius: 1
};

circle4.color = 'blue';
circle4.draw = function() {};

delete circle4.color;

console.log('circle4: ', circle4)




//Constructor Property
console.log('');
console.log('Learning Constructor Property');
console.log('');


function createCircle2(radius) { // factory function
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
};
const circle6 = createCircle2(1);

function Circle2(radius) { //constructor function
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
};

const circle5 = new Circle2(1);

console.log('a', circle5.constructor);

console.log('a', circle6.constructor);


console.log('');
console.log('Learning Functions are Objects');
console.log('');

// here is just to explain exacly the name of the lecture that in JavaScript Functions are objects
// if we get an function and use the command '.' after the function we will see methods and properties

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);


console.log('');
console.log('Learning Value vs. Reference Types');
console.log('');

//it is necessary to understand that in the primitive type are independet variables so when manipulated it changes the value of the variable not the place in the memory
//and the object type use a reference in the memory and they are manipulated, what is saved in the variable is the address of the memory where this value was stored

let x = 10; // primitive type
let y = x; // primitive type

x = 20;
console.log('primitive type: ',x);
console.log('primitive type: ',y);


let x1 = {value: 10}; // object type
let y1 = x1;

x1.value = 20;
console.log(x1);
console.log(y1);



//Primitives are copied by their value and Objects are copied by their reference, 
//it means that with an Object we set a specific location at the memory of the computer and use the reference of this location in the memory to store the object
// and the primitve are store in the variable itself

/* 
value types or primitve types are:
Number
String
Boolean
Symbol
undefined
null



Reference types or object types are:
Object
Function
Array
*/

console.log('');
console.log('Learning Enumerating Properties of an Object');
console.log('');

const circle7 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle7){
    console.log(key, circle7[key]);
}

for (let key of Object.keys(circle7)){
console.log(key);
}

for (let entry of Object.entries(circle7)){
    console.log(entry);
    }
// we can use IN to see if there is a property or method existis in an object
if('radius' in circle7) {
    console.log('YES');
}


console.log('');
console.log('Learning Cloning an Object');
console.log('');

const circle8 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// this is an old way to copy an object
// const another = {};

// for (let key in circle8){
//     another[key] = circle8[key];
// }

// this is how modern JS.
//we call the Oject.assign and in the first argument we pass an empty object or existing one and for the second argument we select the one or more that 
// we want to copy. We can combine object with this assign method

// const another = Object.assign({
//     color: 'gray'
// }, circle8)

//there is another way simpler to clone an object
// this one with this 3 dots ... we spread an object and assign it to a variable which will be the new clone object

const another = { ...circle8 }

console.log('another: ',another);


console.log('');
console.log('Learning Garbage Collection');
console.log('');

// in javascript we do not have to  allocate or deallocate memory for the objects/variables that we create, javascript itself does that with the Garbage Collector.
// this garbage collector find this variables/objects that are not in use and deallocate the memory automatically. 


console.log('');
console.log('Learning Math');
console.log('');

// in javascript we have the object Math that has properties and methods for mathematical constants and function. not a function object.
//to see all the constants and function for this object we can take a look in this site: https://www.udemy.com/course/javascript-basics-for-beginners/learn/lecture/10688870#overview


console.log('');
console.log('Learning String');
console.log('');

