$(document).ready(function () {
      var options = [{
        question: "The statement a===b refers to",
        choice: ["Both a and b are equal in value type and reference address", "Both a and b are equal in value", "Both a and b are equal in value and type",
          "There is no such statement"],
        answer: 2,
        photo: "assets/images/2015-10-02.png"
      }, {
        question: "JavaScript can be written",
        choice: [" directly into JS file and included into HTML ",
          " directly on the server page",
          " directly into HTML pages",
          " all of the mentioned"],
        answer: 0,
        photo: "assets/images/codingcomics-1024x372.png"
      }, {
        question: " Which of the following Attribute is used to include External JS code inside your HTML Document",
        choice: [" src",
          " ext",
          " script",
          " link"],
        answer: 0,
        photo: "assets/images/content(1).gif"
      }, {
        question: " The keyword or the property that you use to refer to an object through which they were invoked is",
        choice: [" from", " to", " this"," object"],
        answer: 2,
        photo: "assets/images/content(2).gif"
      }, {
        question: " The scope of a function is also called as",
        choice: [" The function’s scope",
          " Module function",
          " Modulated function",
          " Private function"],
        answer: 1,
        photo: "assets/images/content.gif"
      }, {
        question: " Modules that have more than one item in their API can",
        choice: [" Assign itself to a global variable",
          " Invoke another module of the same kind",
          " Return a namespace object",
          " Invoke another module of the same kind"],
        answer: 2,
        photo: "assets/images/evolution.png"
      }, {
        question: " The behaviour of the instances present of a class inside a method is defined by",
        choice: [" Method",
          " Classes",
          " Interfaces",
          " Classes and Interfaces"],
        answer: 1,
        photo: "assets/images/htmlcssjs.png"
      }, {
        question: "The basic difference between JavaScript and Java is",
        choice: [" There is no difference",
          " Functions are considered as fields",
          " Variables are specific",
          " Functions are values, and there is no hard distinction between methods and fields"],
        answer: 3,
        photo: "assets/images/iXeP3p9.png"
      }, {
        question: " Which of the following is an example of a Shortcut Property?",
        choice: [" border",
          " font ",
          " text",
          " all of the mentioned"],
        answer: 3,
        photo: "assets/images/jsbrakeman.png"
      }, {
        question: "The property of JSON() method is",
        choice: [" it can be invoked manually as object.JSON()",
          " it will be automatically invoked by the compiler",
          " it is invoked automatically by the JSON.stringify() method",
          " it cannot be invoked in any form"],
        answer: 2,
        photo: "assets/images/roommates.png"
      }];

      console.log(options);

  var correctCount = 0;
  var wrongCount = 0;
  var unanswerCount = 0;
  var timer = 20;
  var intervalId;
  var userGuess ="";
  var running = false;
  var qCount = options.length;
  var pick;
  var index;
  var newArray = [];
  var holder = [];
  
  
  
  $("#reset").hide();
  //click start button to start game
  $("#start").on("click", function () {
      $("#start").hide();
      displayQuestion();
      runTimer();
      for(var i = 0; i < options.length; i++) {
    holder.push(options[i]);
  }
    })
  //timer start
  function runTimer(){
    if (!running) {
    intervalId = setInterval(decrement, 1000); 
    running = true;
    }
  }
  //timer countdown
  function decrement() {
    $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
    timer --;
  
    //stop timer if reach 0
    if (timer === 0) {
      unanswerCount++;
      stop();
      $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
      hidepicture();
    }	
  }
  
  //timer stop
  function stop() {
    running = false;
    clearInterval(intervalId);
  }
  //randomly pick question in array if not already shown
  //display question and loop though and display possible answers
  function displayQuestion() {
    //generate random index in array
    index = Math.floor(Math.random()*options.length);
    pick = options[index];
  
  //	if (pick.shown) {
  //		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
  //		displayQuestion();
  //	} else {
  //		console.log(pick.question);
      //iterate through answer array and display
      $("#questionblock").html("<h2>" + pick.question + "</h2>");
      for(var i = 0; i < pick.choice.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerchoice");
        userChoice.html(pick.choice[i]);
        //assign array position to it so can check answer
        userChoice.attr("data-guessvalue", i);
        $("#answerblock").append(userChoice);
  //		}
  }
  
  
  
  //click function to select answer and outcomes
  $(".answerchoice").on("click", function () {
    //grab array position from userGuess
    userGuess = parseInt($(this).attr("data-guessvalue"));
  
    //correct guess or wrong guess outcomes
    if (userGuess === pick.answer) {
      stop();
      correctCount++;
      userGuess="";
      $("#answerblock").html("<p>Correct!</p>");
      hidepicture();
  
    } else {
      stop();
      wrongCount++;
      userGuess="";
      $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
      hidepicture();
    }
  })
  }
  
  
  function hidepicture () {
    $("#answerblock").append("<img src=" + pick.photo + ">");
    newArray.push(pick);
    options.splice(index,1);
  
    var hidpic = setTimeout(function() {
      $("#answerblock").empty();
      timer= 20;
  
    //run the score screen if all questions answered
    if ((wrongCount + correctCount + unanswerCount) === qCount) {
      $("#questionblock").empty();
      $("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
      $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
      $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
      $("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
      $("#reset").show();
      correctCount = 0;
      wrongCount = 0;
      unanswerCount = 0;
  
    } else {
      runTimer();
      displayQuestion();
  
    }
    }, 2000);
  
  }
  
  $("#reset").on("click", function() {
    $("#reset").hide();
    $("#answerblock").empty();
    $("#questionblock").empty();
    for(var i = 0; i < holder.length; i++) {
      options.push(holder[i]);
    }
    runTimer();
    displayQuestion();
  
  })
  
  })