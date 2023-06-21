function getOutput(){
    var outputFormat = "";

    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('form-content');
        var submitButton = document.getElementById('buttonSubmit');
      
        submitButton.addEventListener('click', function(event) {
          event.preventDefault();
      
          var name = document.getElementById('name').value;
          var email = document.getElementById('email').value;
          var number = document.getElementById('number').value;
          var city = document.getElementById('city').value;
          var selectedLocation = document.querySelector('input[name="radioButton"]:checked');
          var favoriteProducts = document.querySelectorAll('input[name="vehicle"]:checked');

          outputFormat = "Hii " + userData.name + "!!\n" + "Your email id is " + userData.email + "\n" + "Your phone number is " + userData.number + "\n" + "You are from " + userData.city + "\n" + "You have selected " + userData.location + " as your location" + "\n" + "Your favorite products are " + userData.products + "\n";
          document.getElementById('results').innerHTML = outputFormat;

        });
      });
      
}