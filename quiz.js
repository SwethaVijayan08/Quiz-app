const questions = [
    { question: 'What is 2 + 2?', answers: ['3', '4', '5', '6'], correct: '4' },
    { question: 'What is the capital of France?', answers: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct: 'Paris' }
];

let currentQuestion = 0;
let score = 0;

function nextQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById('quiz').innerHTML = `
            <h2>${q.question}</h2>
            ${q.answers.map(a => `<button onclick="checkAnswer('${a}')">${a}</button>`).join('')}
        `;
    } else {
        document.getElementById('quiz').innerHTML = 'Quiz completed!';
        document.getElementById('score').innerHTML = `Your score: ${score}`;
    }
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    nextQuestion();
}

nextQuestion();
