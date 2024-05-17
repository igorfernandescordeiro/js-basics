// This is a Function Declaration

function walk () {
    console.log('walk');
};


// There is other way to defining a function and that is using Function Expression
// function () without a name is an Anonymous Function Expression
let run = () => {
    console.log('run');
};
let move = run;
run();
move();
walk();

// the main difference between them is that Function Declaration can be called before the function itself
// and the Function Expression can not

//When the JavaScript engine runs the code, it moves all the function declarations to the top. 
//this is called Hoisting, but this is done automatically by the JS. 


// Learning about Arguments

function sum(a, b) {
    return a + b;
};

console.log(sum(1,2,2,2));

function sum1() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
};
console.log(sum1(1,2,2,2));

// Arguments is a special object that all the functions has in JavaScript

function sum2(discount, ...prices) { // this three dots is called rest operator
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
};
 // the rest operator should be the last parameter
console.log(sum2(0.1,2,2,2));



// DEFAULT PARAMETERS

function interest (principal, rate, years) {
    rate = rate || 3.5; // this is a way to set a default values to the parameters
    years = years || 5;


    return principal * rate / 100 * years;
}

console.log(interest(10000));

//new way to set default value 
// but this is tricky, if you set a default value to a parameter, all the parameters after this one should have default values
function interest2 (principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest2(10000));


const person = {
    firstName: 'Igor',
    lastName: 'Cordeiro',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ')
        this.firstName = parts[0];
        this.lastName = parts[1]

    }
};

// this example is too add in the lastname more than one name
const person1 = {
    firstName: 'Igor',
    lastName: 'Cordeiro',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        (parts.length > 2) ? this.lastName = parts.slice(1).join(' ') : this.lastName = parts[1];
        
    }
};

person.fullName = 'Igor Cadeira Cordeiro Fernandes Cordeiro Fernandes';
person1.fullName = 'Igor Cadeira Cordeiro Fernandes Cordeiro Fernandes';


// getters => access properties
// setters => change (mutate) them

console.log(person);
console.log(person1);


// try and catch it could be called Defensive programming


const person2 = {
    firstName: 'Igor',
    lastName: 'Cordeiro',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
        const parts = value.split(' ')
        if (parts.length !== 2)
            throw new Error('Enter a frist and last name.');
        this.firstName = parts[0];
        this.lastName = parts[1]

    }
};
try {
    person2.fullName = '';
}
catch (e) {
    console.log(e);
}

console.log('just a log after the error.');


// now we are going to see about Scope.... local and global

const color = 'red';

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}

function stop() {
    const message = 'bye';
}

start();

// now it is about the 'var' keyword

// when use var to declare a variable that is visible to the entire function and it is called function-scoped

function start1() { 
    for (var i = 0; i < 5; i++){
        console.log(i);
        if (true) {
            var color = 'red';
        }
    }
    console.log(color);
};

// in this case when use 'var' outside of a function, this creates a global variable 
// and attaches that global variable to the window object in browser
var color1 = 'green';
let age = 30;

//For the best practices, avoid using the var keyword, because it creates variables that are functions scopes not block scope

start1();


// This keyword in JavaScript

// 'This' references the object that is executing the current function


// method -> obj
// function -> global (window, global)


const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function () {
    console.log(this);
};

video.stop();

function Video(title) {
    this.title = title;
    console.log(this);
};

const v = new Video('b');

const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this)
    }
};

console.log('-------------------------------');

video1.showTags();

// more about THIS

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        })
    }
};

console.log(video2.showTags())

console.log('-------------------------------');
console.log('-------------------------------');
console.log('-------------------------------');

function playVideo(a, b){
    console.log(this);
};
playVideo.call({ name: 'igor' }, 1, 2);
playVideo.apply({ name: 'igor' }, [1, 2]);
playVideo.bind({ name: 'igor' })();
console.log('-------------------------------');
console.log('-------------------------------');
console.log('-------------------------------');

const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

console.log(video3.showTags());

console.log('-------------------------------');
console.log('-------------------------------');
console.log('-------------------------------');

// here we can see that if we use arrow functions which inherit 'this' from the object itself that it has been created
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};

console.log(video4.showTags())