
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

