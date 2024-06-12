const questions = [
    {
        question: "Hand is to glove as foot is to ____.",
        answers: ["sock", "shoe", "sandal", "hat"],
        correct: "shoe"
    },
    {
        question: "What comes next in the sequence? 2, 6, 12, 20, __.",
        answers: ["24", "28", "30", "32"],
        correct: "30"
    },
    {
        question: "If you have three apples and you take away two, how many do you have?",
        answers: ["1", "2", "3", "0"],
        correct: "1"
    },
    {
        question: "If a train travels at 60 miles per hour for 3 hours, how far does it travel?",
        answers: ["120 miles", "180 miles", "200 miles", "240 miles"],
        correct: "180 miles"
    },
    {
        question: "What is the synonym of 'abundant'?",
        answers: ["scarce", "plentiful", "small", "rare"],
        correct: "plentiful"
    },
    {
        question: "She had a ____ appetite and ate all the food on the table.",
        answers: ["tiny", "robust", "picky", "light"],
        correct: "robust"
    },
    {
        question: "Which shape completes the pattern?",
        answers: ["Shape A", "Shape B", "Shape C", "Shape D"],
        correct: "Shape C" // This is a placeholder; actual shape questions need images
    },
    {
        question: "Which of the following figures can be assembled from the pieces shown?",
        answers: ["Figure A", "Figure B", "Figure C", "Figure D"],
        correct: "Figure B" // This is a placeholder; actual 3D visualization questions need images
    },
    {
        question: "What number logically follows this series: 1, 4, 9, 16, __.",
        answers: ["25", "20", "18", "22"],
        correct: "25"
    },
    {
        question: "Remember this list of words: apple, car, tree, house. Which word was not on the list?",
        answers: ["apple", "house", "dog", "car"],
        correct: "dog"
    },
    {
        question: "Memorize this sequence: red, blue, green, yellow. Which color comes after blue?",
        answers: ["green", "yellow", "red", "blue"],
        correct: "green"
    }
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById('quiz');
    const nextButton = document.getElementById('nextBtn');
    const submitButton = document.getElementById('submitBtn');

    function showQuestion(questionIndex) {
        quizContainer.innerHTML = '';
        const questionData = questions[questionIndex];

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h2');
        questionTitle.textContent = `${questionIndex + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionTitle);

        questionData.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answerBtn');
            button.onclick = () => {
                if (button.textContent === questionData.correct) {
                    button.classList.add('correct');
                } else {
                    button.classList.add('incorrect');
                }
                document.querySelectorAll('.answerBtn').forEach(btn => btn.disabled = true);
                checkSubmitButtonAvailability();
            };
            questionDiv.appendChild(button);
        });

        quizContainer.appendChild(questionDiv);
    }

    function checkSubmitButtonAvailability() {
        if (currentQuestionIndex >= 4) {
            submitButton.style.display = 'block';
        } else {
            submitButton.style.display = 'none';
        }
    }

    showQuestion(currentQuestionIndex);
    checkSubmitButtonAvailability();

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            alert('You have reached the end of the quiz.');
        }
        checkSubmitButtonAvailability();
    });

    submitButton.addEventListener('click', () => {
        alert('Quiz Submitted!');
    });
});