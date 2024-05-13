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