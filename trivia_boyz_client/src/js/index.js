$(document).ready(function() {
  console.log("What's up, Doc?")


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

  // Used like so
  // var arr = [2, 11, 37, 42];
  // arr = shuffle(arr);
  // console.log(arr);

  //var x

//is this returning a promise or an object?
  $.ajax({
    dataType: 'json',
    method: "GET",
    url: "http://localhost:3000",
    success: function(data) {
      $("#question").text(data.q.question)
      // $("#1 .cell1").html(data.a[0].answer)

      var arrayOfAnswers = data.a
      var rowID = 1
      var trigger = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]

      console.log(data.a);

      shuffledArray = shuffle(arrayOfAnswers)

      shuffledArray.forEach(function(answerObj, i){
        // the first index
        // every tenth element, to go to the next row
        console.log(answerObj.answer);
        if (i === 0) {
          $(`#${rowID} .cell${i+1}`).html(shuffledArray[i].answer) //first answer
        } else if ( trigger.includes(i) ) { //if index ends in 9...
          $(`#${rowID} .cell${10}`).html(shuffledArray[i].answer) //fill in 10th cell
          rowID++ //and go to the next row
        } else {
          $(`#${rowID} .cell${(i + 1) % 10}`).html(shuffledArray[i].answer) //fill in every other cell
        }
      })
    }, error: function(error) {
      console.log(error)
    }
  })
})



//$("#1 .cell1").text("words on the page")

//need to parse
