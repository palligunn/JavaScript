function populate() {
	if(quiz.isEnded()) {
		//showScores();
	}
	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		// show Choices
		var Choices = quiz.getQuestionIndex().Choices;
		for(var i = 0; i< Choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = Choices[i];
		}
	}
}

var question = [
new Question("Er Gras Grænt?", ["já", "nei"], "já"),
new Question("hvaða fyrirtæki á youtube?", ["google", "facebook","Icelandair", "Eimskip"],"google")
];
var quiz = new Quiz(question);

populate();