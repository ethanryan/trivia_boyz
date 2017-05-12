$(document).ready(function() {
  $("body").toasty();
})


var count
var score = 0
$("#gameButton").click(function() {
  count = 15;
  var counter = setInterval(timer, 1000);

  function timer() {
    count = count-1;
    $("#timer").html(`Timer: ${count}`)


    if (count === -1) {
      $("#timer").html(`Timer: 0`)

      alert("Game Over")
      clearInterval(counter);
    }
  }

  score = 0
})
