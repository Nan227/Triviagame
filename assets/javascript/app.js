var pos = 0, test, test_statust, questions, choices, chA, chB, chC, chD, correct=0;
// 7 Questions of test
var questions = {
  "questionone" :  ["1. The statement a===b refers to"," Both a and b are equal in value, type and reference address"," Both a and b are equal in value"," Both a and b are equal in value and type"," There is no such statement","c"],
  "questiontwo" : ["2. JavaScript can be written"," directly into JS file and included into HTM"," directly on the server page"," directly into HTML pages"," all of the mentioned","a"],
    // ["3. Which of the following Attribute is used to include External JS code inside your HTML Document"," src"," ext"," script"," link","a"],
    // ["4. The keyword or the property that you use to refer to an object through which they were invoked is"," from"," to"," this"," object","c"],
    // ["5. The scope of a function is also called as"," The function’s scope"," Module function"," Modulated function"," Private function","b"],
    // ["6. Modules that have more than one item in their API can"," Assign itself to a global variable"," Invoke another module of the same kind"," Return a namespace object"," Invoke another module of the same kind","c"],
    // ["7. The C in CSS stands for"," Continuous"," Cascaded"," Contentional"," Cascading","d"]
};
console.log(questions.questionone);
$("#testtatus").append(questions);

  function _(x){
    return document.getElementById(x) 
   
  };
// Show question one by one inorder
  // function orderQuestion() {
  //   test : _("test");
  //   // result of the test will show on HTML the end of the test
  //     if (pos >= questions.length){
  //       test.innerHTML = "<h2> You got" + correct +"of "+ questions.length + " questions correct </h2>";
  //       pos = 0;
  //       correct =0;
  //       return false;
  //     }
    // show questions
  //   ($"#teststatus").innerHTML="Question"+(pos+1)+"of "+questions.length;
  //       questions = questions[pos][0];
  //       chA = questions[pos][1];
  //       chB = questions[pos][2];
  //       chC = questions[pos][3];
  //       chD = questions[pos][4];
    
  //       test.innerHTML ="<h3>"+ questions + "</h3>";
  //       test.innerHTML += "<input type='radio' name ='choices' value = 'a'> "+ chA+"<br>";
  //       test.innerHTML += "<input type='radio' name ='choices' value = 'a'> "+ chB+"<br>";
  //       test.innerHTML += "<input type='radio' name ='choices' value = 'a'> "+ chC+"<br>";
  //       test.innerHTML += "<input type='radio' name ='choices' value = 'a'> "+ chD+"<br>";
  //       test.innerHTML += "<button onclick ='checkAnswer()'> Submit Answer </button>";
  // }

  // // check answer 
  // function checkAnswer(){
  //   choices = document.getElementsByName("choices");
  //   for (var i=o; i< choices.length; i++){
  //     if (choices[i].checked){
  //       choices=choices[i].value;
  //     }
  //   }
  //   if (choices == questions[pos][5]){
  //     correct ++;
  //   }
  //     pos ++;
  //     orderQuestion ++;
  // }

  // window.addEventListener("load",orderQuestion,false);
  