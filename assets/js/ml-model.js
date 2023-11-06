// Popup for machine learning model
// Get the modal
var modal = document.getElementById("randomForestModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("modal-trigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Xception

// Xception
var modal3 = document.getElementById('xceptionModal');
// Get the button that opens the modal
var btn3 = document.querySelector('.modal-trigger3'); // Changed variable name to btn3 to avoid conflicts
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0]; // Changed variable name to span3 to avoid conflicts

// When the user clicks on the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";  // Corrected to modal3
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";  // Corrected to modal3
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {  // Corrected to modal3
        modal3.style.display = "none";
    }
}

