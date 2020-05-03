$(document).ready(function(){

	    var quesNumb = 0 ;
		var rightanswer = 0;
		var wronganswer = 0;
		var tooSlow = 0;
		var seconds;
		var time;
		var answers;
		var optionselect;


	var questions = [{ 
			question: "How fast does the time machine?",
			options: ["88 mph", "100 mph", "75 mph"],
			answer: 0,
		}, {
			question: "How did Biff become rich?",
			options: ["Male modeling", "The lottery", "Gambling"],
			answer: 2,
		
        }, {
			question: "What model car is the time machine?",
			options: ["Lambo", "Delorean", "Focus"],
			answer: 1,
		
        }, {
			question: "How many Gigawatts are needed for time travel?",
			options: ["1.21", "47", "6200"],
			answer: 0,
		
        }, {
			question: "In 1955, what does Ms McFly assume Marty's name is?",
			options: ["Calvin", "Phil", "Tommy"],
			answer: 0,
		
        }, {
			question: "What is Biff's ancestor's nickname in the Old West?",
			options: ["Wild One", "Drunk Tannen", "Mad Dog"],
			answer: 2,
		
        }, {
			question: "What is Mr Fusion used for on the time machine?",
			options: ["Speed", "Power supply", "Fuel"],
			answer: 1,
		
        }, {
			question: "What does Marty's great-great-grandfather do to him in the Old West?",
			options: ["Buys him beer", "Pees on him", "Shots him"],
			answer: 1,
		
        }, {
			question: "How did George McFly become successful in the end?",
			options: ["Male modeling", "Boxer", "Writer"],
			answer: 2,
		
        }, {
			question: "What is Micheal J Fox's middle name?",
			options: ["Andrew", "Joseph", "James"],
			answer: 2,
		
        }];
        




    $(".container").hide()

    $("#act-btn").on("click", function () {

        nextQues();
        $("#act-btn").hide();
        $(".welcome").hide();
        $(".container").show();
    });

		

		function nextQues(){
			
           // $("#restart").hide();
            shotClock();
        
            $("#ques-count").html("Question " + (quesNumb+1) + "  of " + questions.length); // adds question 1 of 10
			$(".question").html("<h2>" + questions[quesNumb].question + "</h2>"); // displays question

			for(var i = 0; i < 3; i++){
				var select = $("<div>");
				select.text(questions[quesNumb].options[i]);
				select.attr({"data-index" : i});  // decides correct answer
				select.addClass("selection");      //allows selection
				$(".answer").append(select);    // showing answer
			}

			

			$(".selection").on("click", function(){
				optionselect = $(this).data("index");
				clearInterval(time);                  //resets timer
				showAnswer();
            })
        

		};

        //

		

		var message = {
			right: "Correct!",
			wrong: "Wrong!",
		    slow: "You took too much TIME!",
			endgame: "TIME'S UP!"
		}

		function showAnswer(){
			$("#ques-count").empty();
			$(".selection").empty();
            $(".question").empty();
            $("#display-mess").empty();

			var correctAns = questions[quesNumb].options[questions[quesNumb].answer];
			var match = questions[quesNumb].answer;

			if ((optionselect == match) && (answers == true)){
				rightanswer++;
				$("#display-mess").text(message.right);
			} else if ((optionselect !== match) && (answers == true)){
				wronganswer++;
				$("#display-mess").text(message.wrong);
				$("#confirm").html("The correct answer was: " + correctAns-1);
			} else {
				tooSlow++;
				$("#display-mess").text(message.slow);
				$("#confirm").html("The correct answer was: " + correctAns-1);
			}

			if (quesNumb === (questions.length-1)){    // next question displays after guess/timeout
				setTimeout(score, 2000)
			} else {
				quesNumb++;
                setTimeout(nextQues, 2000);
                
			}
        };

        function count(){
            seconds--;
            
			$("#timer").html("<h2>TIME:" + seconds-- + "</h2>");
			if(seconds < 1){
				clearInterval(time);
				answers = false;
				
			}
		};

        

        function shotClock(){
			seconds = 10;
			$("#timer").html("<h2>Time Remaining:" + seconds + "</h2>");
			answers = true;
			time = setInterval(count, 1000);
		};
        
        
        
        
        //$("#restart").on("click", function () {
       //     $(".container").hide();
       //     $(".welcome").show();
       //     quesNumb = 0
      //      rightanswer = 0;
       //     wronganswer = 0;
        //    tooSlow = 0;
       //     answers=0;
    
       // })
    

		function score(){
			$("#act-btn").show();
			$("#timer").empty();
			$("#display-mess").empty();
			$("#confirm").empty();
            $("#restart").show();
			$("#results").html(message.endgame);
			$("#rightanswer").html("Right Answers: " + rightanswer);
			$("#wronganswer").html("Wrong Answers: " + wronganswer);
			$("#tooSlow").html("Nothing Answer: " + tooSlow);
		};
});
