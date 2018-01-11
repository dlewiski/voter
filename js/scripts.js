$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));
  if (age < 18) {
    $(".under21").show();
  } else if (age === 21) {
    alert("congratulations bae!")
  } else {
    $(".over21").show();
  }
});
