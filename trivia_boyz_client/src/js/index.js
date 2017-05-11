$(document).ready(function() {
  console.log("What's up, Doc?")
  })

  var count = 15;
  var counter = setInterval(timer, 1000);

  function timer() {
    count = count-1;
    if (count <= 0) {
      clearInterval(counter);
    }
    $("#timer").html(`Timer: ${count}`);
  }

  var score = 0

  function renderScore() {
    return score;
  }

  // $(function() {
  //   $(".answer").click(function() {
  //     if(this.innerHTML.length === 4 && count > 0) {
  //       $(this).css("background", "green")
  //       console.log($(this).css("background", "green"));
  //       score += 2
  //       $("#score").html(`Score: ${renderScore()}`)
  //     } else if(count > 0 && $(this).css("background", "white")) {
  //       $(this).css("background", "red")
  //       score -= 4
  //       $("#score").html(`Score: ${renderScore()}`)
  //     }
  //   })
  // })

  // function shuffle(array) {
  //   var currentIndex = array.length, temporaryValue, randomIndex;
  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //   return array;
  // }

  // $.ajax({
  //   dataType: 'json',
  //   method: "GET",
  //   url: "http://localhost:3000",
  //   success: function(data) {
  //     $("#question").text(data.q.question)
  //     // $("#1 .cell1").html(data.a[0].answer)
  //
  //     var arrayOfAnswers = data.a
  //     var rowID = 1
  //     var trigger = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
  //
  //     shuffledArray = shuffle(arrayOfAnswers)
  //
  //     shuffledArray.forEach(function(answerObj, i){
  //       if (i === 0) {
  //         $(`#${rowID} .cell${i+1}`).text(shuffledArray[i].answer) //first answer
  //       } else if ( trigger.includes(i) ) { //if index ends in 9...
  //         $(`#${rowID} .cell${10}`).text(shuffledArray[i].answer) //fill in 10th cell
  //         rowID++ //and go to the next row
  //       } else {
  //         $(`#${rowID} .cell${(i + 1) % 10}`).text(shuffledArray[i].answer) //fill in every other cell
  //       }
  //     })
  //   }, error: function(error) {
  //     console.log(error)
  //   }
  // })
