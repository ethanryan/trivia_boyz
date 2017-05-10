$(document).ready(function() {
  console.log("What's up, Doc?")

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
      console.log(data.a);

      arrayOfAnswers.forEach(function(answerObj, i){
        var rowOne = $(`#1 .cell${i}`).html(arrayOfAnswers[i].answer)
        var rowTwo = $(`#2 .cell${i}`).html(arrayOfAnswers[i].answer)
        return rowOne + rowTwo
      })


      // arrayOfAnswers.forEach(function(answerObj, i){
      //   //---return $(`#1 .cell${i}`).html(array[i].answer)
      //   answerObj.forEach(function(answer, i){
      //     return $(`#${i} .cell${i}`).html(array[i].answer)
      //   })
      // })
    }, error: function(error) {
      console.log(error)
    }
  })
})


//$("#1 .cell1").text("words on the page")

//need to parse
