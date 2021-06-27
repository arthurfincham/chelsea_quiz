// Range Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("year");
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
}

var decade = document.getElementById("year");
var scorer = document.getElementById('scorer').value;
var champs = document.getElementById('location').value;
var mascot = document.getElementById("mascot").value;

function myFunction() {
  document.getElementById("answers").innerHTML = 
  decade + "<br>" +
  scorer + "<br>" +
  champs + "<br>" +
  mascot
} 