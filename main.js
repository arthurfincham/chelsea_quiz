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

// Anchor Link Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Nationality checkbox limiter
var checks = document.querySelectorAll(".nationman");
var max = 2;
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".nationman:checked");
  if (checkedChecks.length >= max + 1)
    return false;
}