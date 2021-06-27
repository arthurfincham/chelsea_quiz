// Range Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("year");
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
}



function myFunction() {

  var decade = document.getElementById("year").innerHTML;
  var scorer = document.querySelector('input[name="scorer"]:checked').value
  var champs = document.getElementById('location').value;
  var mascot = document.querySelector('input[name="mascot"]:checked').value

  document.getElementById("answers").innerHTML = "1870 --  " + decade + "<br>" + "Lampard --  " + scorer + "<br>" + "munich --  " + champs + "<br>" + "Stamford the Lion --  " + mascot
} 