// $(document).ready(function() {
//   $("body").toasty();
// })


const baseUrl = 'http://localhost:3000'

// const baseUrl = 'https://trivia-boyz-api.herokuapp.com'


$(document).ready(function() {
  console.log("What's up, Doc?")

  $("body").toasty();

  var secondData = ""

  //adding highscore api call here:
  $.ajax({
    method: "GET",
    url: `${baseUrl}/scores/high_scores`,
    success: function(data) {
      console.log('here is the high score info::: ', data)
      var highScores = data.map(function(object) {
        return `<li>${object.username}: ${object.score}</li>`
      })
      $("#highScores").html(highScores)
    }
  })
  //adding highscore api call above...

  $.ajax({
    method: "GET",
    // url: `${baseUrl}/games/highscore`,
    url: `${baseUrl}/game`,
    success: function(data) {
      console.log('here is the game info... for highscore: ', data)
      $("#highScore").text(data.join(" "))
    }
  }).then(function() {

    $.ajax({
      method: "GET",
      url: `${baseUrl}/games/questions`,
      success: function(data) {
        console.log(`All the questions: ${data}`);
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


    // if (count === 0) {
    if (count < 0) {
      $("#timer").html(`Timer: 0`)

      var username = prompt("Game Over! Enter username to submit score!")
      console.log('**** username is: ', username)
      console.log('**** score is: ', score)

      var scoreAndUsername = {score: {"score": score, "username": username} }
      //in above format cuz score_params is: params.require(:score).permit(:score, :username)

      console.log('***** scoreAndUsername is: ', scoreAndUsername)

      $.ajax({
        method: "POST",
        url: `${baseUrl}/scores`,
        data: scoreAndUsername,

        success: function(data) {
          console.log('scoreAndUsername posted to database: ', data)
        },
      })

      clearInterval(counter);
    }
  }

  score = 0
})
