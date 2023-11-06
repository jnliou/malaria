// Popup for machine learning model


//CNN
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
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

// Random Forest
var modal2 = document.getElementById("randomForestModal");

// Get the button that opens the modal
var btn2 = document.getElementsByClassName("modal-trigger2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2[0].onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event2) {
  if (event2.target == modal2) {
    modal2.style.display = "none";
  }
}
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
window.onclick = function(event3) {
    if (event3.target == modal3) {  // Corrected to modal3
        modal3.style.display = "none";
    }
}


