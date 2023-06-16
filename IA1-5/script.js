// A JS file to generate multiplication of a number
// given by the user as input from the html form
// and display it in the html page using innerHTML


// Function to generate the multiplication table
function generateTable() {
    // Get the input number
    var num = document.getElementById("numInput").value;

    if(num == "") {
        alert("Please enter a valid number");
        return;
    } else {
        // Multiply the number from 1 to 10 using while loop and with a line break
    var i = 1;
    var result = "";
    
    while (i <= 10) {
        result += num + " x " + i + " = " + (num * i) + "<br>";
        i++;
    }
    // Display the result in the html page
    document.getElementById("result").innerHTML = result;
    }

    
    


}