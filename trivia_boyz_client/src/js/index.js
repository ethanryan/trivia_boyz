// $(document).ready(function() {
//   console.log("What's up, Doc?")
//   })
var count
var score = 0
$("#gameButton").click(function() {
  count = 15;
  var counter = setInterval(timer, 1000);

  function timer() {
    count = count-1;

    if (count === -1) {
      clearInterval(counter);
      alert("Game Over")
      count = 0
    }
    $("#timer").html(`Timer: ${count}`);
  }

  score = 0
})
