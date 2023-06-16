// Let's say you want to create a module which has constants like the value of PI and,
// it has a function which calculates the area of circle when that function is called with radius as param.
// But, for this you don't need to create a function or calculate the constant PI value to do the task.
// Bcoz there exists a library called "mathLib"(which you are creating) which has all these values and you just
// import that library and start using it. Let's do it!

const myMod = require("./mathLib.js") // This is how you import a module in nodejs
console.log(myMod.PI);
console.log(myMod.areaOfCircle(5));

