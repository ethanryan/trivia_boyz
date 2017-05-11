// $(document).ready(function() {
//   console.log("What's up, Doc?")
//   })
$("#gameButton").click(function() {
  var count = 15;
  var counter = setInterval(timer, 1000);

  function timer() {
    count = count-1;
    if (count <= 0) {
      clearInterval(counter);
      alert("Game Over")
    }
    $("#timer").html(`Timer: ${count}`);
  }

  var score = 0

  function renderScore() {
    return score;
  }
}
