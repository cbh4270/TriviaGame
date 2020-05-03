# TriviaGame


$(document).ready(function () {


  $("#act-btn").on('click', questions.startGame);








var begin = document.getElementById("start");
var container = document.getElementById("container");
var question = document.getElementById("question");
var counter = document.getElementById("counter");

var optionA = document.getElementById("a");
var optionB = document.getElementById("b");
var optionC = document.getElementById("c"),

//  var start = $("#start");  SAME AS?  TEST LATER


 


var questions =  [ {
  question: "How fast does the time machine?",
  optionA: "75",
  optionB: "88",
  optionC: "100",
  correct: "b",
  
}, {
  question: "How did Biff become rich?",
  optionA: "Male modeling",
  optionB: "The Lotto",
  optionC: "Gambling",
  correct: "c",
  
},{
  question: "How fast does the time machine?",
  optionA: "75",
  optionB: "88",
  optionC: "100",
  correct: "1",
  
},{
  question: "How fast does the time machine?",
  optionA: "75",
  optionB: "88",
  optionC: "100",
  correct: "1",
  

}];

function startGame(){
  console.log("game has begun");
        $('.start-button').remove();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
      //  loadQandA();


}

var startGame = $("#act-btn").on('click', function() {
  $(this).parent().hide();
  $('.container').show();
  countdown(60);
  questionDisplay();
});


})