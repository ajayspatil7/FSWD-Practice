check();

var x = 233;
console.log("X variable in global scope is " + x);
console.log(check);

function check() {
    var x = 23;
    console.log("Variable X inside check function is " + x);
}

``