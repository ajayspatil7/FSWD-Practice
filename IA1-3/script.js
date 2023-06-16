// Display list of chocolates stored in a list to the user on the web page
let chocolatesList = ["Kitkat", "Snickers", "Cadbury", "Ferrero Rocher"];
let yourChocolate = prompt("Enter your favourite chocolate: ");

// Itterate through the array elements and display each element in the list using innerHTML
function chocolates() {
    let result = "";

    // Itterate list
    for(let i = 0; i < chocolatesList.length; i++) {
        result += chocolatesList[i] + "<br>";
    }

    if(chocolatesList.includes(yourChocolate)) {
        result += "Your favourite chocolate is in the list :) ";
    } else {
        result += "Your favourite chocolate is not in the list :( ";
    }
    // Without console
    document.getElementById("chocolates").innerHTML = result;

    
}