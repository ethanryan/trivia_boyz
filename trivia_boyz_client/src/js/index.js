// $(document).ready(function() {
//   $("body").toasty();
// })


// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://trivia-boyz-api.herokuapp.com'

// const baseUrl = 'https://word-nerds-api.herokuapp.com'

$(document).ready(function() {
  console.log("What's up, Doc?")

  $("body").toasty();

  var secondData = ""
  $.ajax({
    method: "GET",
    url: `${baseUrl}/games/highscore`,
    success: function(data) {
      console.log(data)
      $("#highScore").text(data.join(" "))
    }
  }).then(function() {

    $.ajax({
      method: "GET",
      url: `${baseUrl}/games/questions`,
      success: function(data) {
        console.log(`Questions: ${data}`);
        data.forEach(function(question, i) {
          secondData = secondData + `<option id=${i}>` + question + "</option>"
        })
      }
    })
  });
});



var count
var score = 0
$("#gameButton").click(function() {
  count = 15;
  var counter = setInterval(timer, 1000);

  function timer() {
    count = count-1;
    $("#timer").html(`Timer: ${count}`)


    if (count === 0) {
      $("#timer").html(`Timer: 0`)

      alert("Game Over")
      clearInterval(counter);
    }
  }

  score = 0
})


/////fourLetterWords below::::
