// function statement
function greet() {
    console.log('hi');
}

// functions are first-class, meaning 
// everything you can do with other types you can
// can do with functions.
// ie: pass them around, set them to variables
function logGreeting(fn) {
    fn();
}

greet();
logGreeting(greet); //greet function being passed through to logGreeting