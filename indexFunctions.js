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
