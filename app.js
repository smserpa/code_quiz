function populate() {
    if(quiz.isEnded()) {
        // showScores();
    }

else {

    // displays question
    var element = document.getElementById("question-box");
    element.innerHTML = quiz.getQuestionIndex().text;

    // displays answers
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i< choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
    }
}

}

var questions = [
    new Question("In javascript true is an example of what kind of value?", ["String", "Boolean", "Number", "Object"], "Boolean")

];

var quiz = new Quiz(questions);

populate();