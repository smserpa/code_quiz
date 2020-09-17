var startButton = document.getElementById('start-button')
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    var hideStart = document.getElementById("start");
    if (hideStart.style.display === "none") {
        hideStart.style.display = "block";
    } else {
        hideStart.style.display = "none";
    }
    document.getElementById("hide-questions").style.display = "block";
    

    var myQuestions = [
    
        {
            question: "In javascript true is an example of what kind of value?",
            answers: {
                a: "String",
                b: "Boolean",
                c: "Number",
                d: "Object"
            },
            correctAnswer: "b"
        },
        {
            question: "In bash/terminal what does the rm -r command perform?",
            answers: {
                a: "Makes a new directory",
                b: "Changes directory",
                c: "Makes a file",
                d: "Deletes an item and all descendants"
            },
            correctAnswer: "d"
        },
    ];

    for (var i = 0; i < answers.length; i++) {
        var loadButton = document.getElementsByClassName("btn");
        loadButton.textContent = answers[i];
    }
}


// submitButton.addEventListener('click', displayResults);

// function showQuestions() {
//     return document.getElementById("question-box");
// }
// showQuestions(Object.getOwnPropertyNames(myQuestions))




