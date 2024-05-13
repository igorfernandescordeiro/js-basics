// This is a Function Declaration
function walk () {
    console.log('walk');
};


// There is other way to defining a function and that is using Function Expression
// function () without a name is an Anonymous Function Expression
let run = function() {
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