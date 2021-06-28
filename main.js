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
  var array = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  
  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
  }

  var nation = array.reduce((a,b) => a + b)

  let score = 0

  decade == 1870 ? score += 1 : score += 0
  scorer == 1 ? score += 1 : score += 0
  champs == "munich" ? score += 1 : score += 0
  mascot == 1 ? score += 1 : score += 0
  nation == 11 ? score += 1 : score += 0

  document.getElementById("answers").innerHTML = "You got " + score + " out of five!"
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