const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the capital of Rwanda?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Kigali", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Who is president of Rwanda?" ,
        answers: [
            {text: "Paul Kagame", correct: true},
            {text: "Donald Trump", correct:false},
            {text: "Felix Tshisekedi", correct:false},
            {text:"Evariste Ndayishimiye", correct:false}
        ]
    }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove("hide");
    restartButton.classList.add("hide");
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    answerButtons.innerHTML = "";
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.innerText = `Quiz Finished! Your score: ${score}/${questions.length}`;
    nextButton.classList.add("hide");
    restartButton.classList.remove("hide");
}

nextButton.addEventListener("click", showQuestion);
restartButton.addEventListener("click", startQuiz);

startQuiz();
