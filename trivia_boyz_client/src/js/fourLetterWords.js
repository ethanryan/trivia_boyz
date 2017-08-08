$("#gameButton").click(function() {
  // empties text from cells, resets score and resets cell color to white when a new game is started
  score = 0
  timer = 15
  var curStreak = 0
  $("#timer").html(`Timer: ${count}`)
  Array.from($(".answer")).forEach(function(cell, i) {
    $(cell).text("")
    $(cell).css("background-color", "rgb(255, 255, 255)")
    $("#score").html(`Score: ${score}`)
  })

  $(function() {
    $(".answer").click(function() {
      if(this.innerHTML.length === 4 && count > 0 && $(this).css("background-color") === "rgb(255, 255, 255)") {
        $(this).css("background-color", "green")
        score += 2
        curStreak += 1

        if (curStreak % 5 === 0) {
          $("body").toasty('pop');
        } else if (curStreak >= 10 && curStreak % 3 === 0) {
          $("body").toasty('pop');
        }

        $("#score").html(`Score: ${score}`)
      } else if(count > 0 && $(this).css("background-color") === "rgb(255, 255, 255)") {
        $(this).css("background", "red")
        score -= 4
        curStreak = 0
        $("#score").html(`Score: ${score}`)
      }
    })
  })

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  $.ajax({
    dataType: 'json',
    method: "GET",
    // url: "http://localhost:3000",
    url: `${baseUrl}`,
    success: function(data) {
      $("#question").text(data.q.question)
      // $("#1 .cell1").html(data.a[0].answer)

      var arrayOfAnswers = data.a
      var rowID = 101
      var trigger = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]

      var shuffledAnswers = shuffle(arrayOfAnswers)
      var randomIndices = []
      for(let i = 1; i <= 100; i++) {
        randomIndices.push(i)
      }
      shuffle(randomIndices)
      var firstFortyAnswers = shuffledAnswers.splice(0, 40)
      var firstFortyIndices = randomIndices.splice(0, 40)

      console.log(shuffledAnswers.length)


      firstFortyAnswers.forEach(function(answerObj, i){
        $(`#${firstFortyIndices[i]}`).text(firstFortyAnswers[i].answer)
      })

      var interval = setInterval(addAnswer, 200)

      function addAnswer() {
        if(shuffledAnswers.length) {
          var curAnswer = shuffledAnswers.splice(0, 1)
          var curIndex = randomIndices.splice(0, 1)
          if ($(`#${curIndex}`).css("background-color") !== "rgb(255, 0, 0)") {
            $(`#${curIndex}`).text(curAnswer[0].answer)
          }
        } else {
          clearInterval(interval)
        }
      }
    }, error: function(error) {
      console.log(error)
    }



  })
})
