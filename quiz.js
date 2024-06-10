const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Saturn", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the tallest mammal?",
        options: ["Giraffe", "Elephant", "Hippopotamus", "Rhino"],
        answer: "Giraffe"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    questionElement.innerText = quizQuestions[currentQuestion].question;
    const options = quizQuestions[currentQuestion].options.map((option, index) =>
        `<button onclick="checkAnswer('${option}')">${option}</button>`
    );
    optionsElement.innerHTML = options.join("");
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.innerText = "Quiz completed!";
    optionsElement.innerHTML = "";
    scoreElement.innerText = `Your score: ${score} / ${quizQuestions.length}`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    }
});

displayQuestion();
