
var quesNumb; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time; 
var answered; 
var userSelect;

var messages = {
	correct: "Right!",
	incorrect: "Too bad you can't go back in time. Wrong Answer",
	endTime: "Out of TIME!",
	finished: "That was HEAVY. How do you think you did?"
}



var theQuestions = [{ 
	question: "How fast does the time machine?",
	solutions: ["88 mph", "100 mph", "75 mph"],
	answer: 0,
}, {
	question: "How did Biff become rich?",
	solutions: ["Male modeling", "The lottery", "Gambling"],
	answer: 2,

}, {
	question: "What model car is the time machine?",
	solutions: ["Lambo", "Delorean", "Focus"],
	answer: 1,

}, {
	question: "How many Gigawatts are needed for time travel?",
	solutions: ["1.21", "47", "6200"],
	answer: 0,

}, {
	question: "In 1955, what does Ms McFly assume Marty's name is?",
	solutions: ["Calvin", "Phil", "Tommy"],
	answer: 0,

}, {
	question: "What is Biff's ancestor's nickname in the Old West?",
	solutions: ["Wild One", "Drunk Tannen", "Mad Dog"],
	answer: 2,

}, {
	question: "What is Mr Fusion used for on the time machine?",
	solutions: ["Speed", "Power supply", "Fuel"],
	answer: 1,

}, {
	question: "What does Marty's great-great-grandfather do to him in the Old West?",
	solutions: ["Buys him beer", "Pees on him", "Shots him"],
	answer: 1,

}, {
	question: "How did George McFly become successful in the end?",
	solutions: ["Male modeling", "Boxer", "Writer"],
	answer: 2,

}, {
	question: "What is Michael J Fox's middle name?",
	solutions: ["Andrew", "Joseph", "James"],
	answer: 0,

}];

$('#startOverBtn').hide();


$('#startBtn').click(function(){
	$(this).hide();  						 
	newGame();								
});

$('#startOverBtn').click(function(){
	$(this).hide();							
	newGame();
});

function newGame(){						
	$('#finalMess').empty();
	$('#correctAnswers').empty();        
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	quesNumb = 0;
	correctAnswer = 0;						
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();                  
	$('#showAnswer').empty();
	
	answered = true;						
	
	//sets up new questions & solutions
	$('#quesNumb').html('Question '+(quesNumb+1)+'/'+theQuestions.length);  
	$('.question').html('<h2>' + theQuestions[quesNumb].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(theQuestions[quesNumb].solutions[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.solutions').append(choices);
	}
	countdown();

	
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
} 




function countdown(){
	seconds = 10;
	$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#quesNumb').empty();
	$('.thisChoice').empty(); 
	$('.question').empty();

	var rightAnswerText = theQuestions[quesNumb].solutions[theQuestions[quesNumb].answer];
	var rightAnswerIndex = theQuestions[quesNumb].answer;
	
	
	
	
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#showAnswer').html('The correct answer is: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#showAnswer').html('The correct answer is: ' + rightAnswerText);
		answered = true;
	}
	
	if(quesNumb == (theQuestions.length-1)){
		setTimeout(scoreboard, 1000)
	} else{
		quesNumb++;
		setTimeout(newQuestion, 3500);
	}	
}

function scoreboard(){
	$('#timer').empty();
	$('#message').empty();
	$('#showAnswer').empty();
	$('#gif').empty();

	$('#finalMess').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('startOverBtn');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Go back in TIME?');
}
