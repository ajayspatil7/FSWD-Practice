// Normal function
let helloo = "";
helloo = function () {
    return "Hello World! from a normal function";
}

// Arrow function
let hello = () => {
  return "Hello World! from an arrow function";
};

document.getElementById("normFun").innerHTML = helloo();
document.getElementById("arrowFun").innerHTML = hello();
