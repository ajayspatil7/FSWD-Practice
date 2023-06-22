document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('buttonSubmit');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        getOutput();
    });
});

function getOutput() {
    var outputFormat = "";

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var city = document.getElementById('city').value;

    var selectedLocation = document.querySelector('input[name="radioButton"]:checked');
    var location = selectedLocation ? selectedLocation.value : '';

    var favoriteProducts = document.querySelectorAll('input[name="vehicle"]:checked');
    var products = [];

    favoriteProducts.forEach(function(product) {
        products.push(product.value);
    });

    outputFormat = "Hi " + name + "!\n" +
        "Your email id is " + email + "\n" +
        "Your phone number is " + number + "\n" +
        "You are from " + city + "\n" +
        "You have selected " + location + " as your location" + "\n" +
        "Your favorite products are " + products.join(', ') + "\n";

    document.getElementById('results').textContent = outputFormat;
}