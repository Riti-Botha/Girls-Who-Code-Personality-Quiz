var i0Score = 0;
var i1Score = 0;
var iQuestionCount = 0;
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", ftrue);
q1a2.addEventListener("click", ffalse);

q2a1.addEventListener("click", ffalse);
q2a2.addEventListener("click", ftrue);

q3a1.addEventListener("click", ftrue);
q3a2.addEventListener("click", ffalse);

q3a2.addEventListener("click", result);

function ftrue() {
  i1Score += 1;
  iQuestionCount += 1;
  console.log("Question count = " + iQuestionCount + " 1 Score = " + i1Score);

  if (iQuestionCount == 3) {
  console.log("The quiz is done!")
}
updateResult(); 
}

function ffalse() {
  i0Score += 1;
  iQuestionCount += 1;
  console.log("Question count = " + iQuestionCount + " 0 Score = " + i0Score);

  if (iQuestionCount == 3) {
  console.log("The quiz is done!")
  }
  updateResult();
}


  function updateResult() {
  if (i0Score >= 2 && iQuestionCount == 3) {
  console.log("False.");
   result.innerHTML = "False :(";
  } else if (i1Score >=2 && (iQuestionCount == 3)) {
  console.log("True!");
    result.innerHTML = "True! You are a real coder! :P";
  } 
  }

restart.addEventListener("click", frestart);

function frestart() {
  i1Score = 0;
  i0Score = 0;
  iQuestionCount = 0;
  result.innerHTML = "Loading...";
}





