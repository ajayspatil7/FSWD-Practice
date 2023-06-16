// Let's first create a value which holds the value for PI
const PI = 3.141592653589793238462643383279502884197

// Function to calculate ar of circle
function areaOfCircle(radius){
    return PI * (radius * radius)
}


// They are ready to be exported now. So that people can import the mathLib file and start using it.
// Let's export them
module.exports = {PI, areaOfCircle};



