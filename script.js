let score = 0;
let questionsAnswered = 0;

// Terminology Questions (UK Casino Terms)
const terminologyQuestions = [
    { question: "What is 'en prison' in roulette?", answer: "Half-back bet" },
    { question: "What does 'split bet' mean?", answer: "Two numbers" },
    { question: "What is a 'corner bet'?", answer: "Four numbers" },
    { question: "What is the 'wheel' in roulette?", answer: "Spinning device" },
    { question: "What does 'call bet' mean?", answer: "Announced bet" },
];

// Start Multiplication Quiz (17 & 35 Tables)
function startMultiplicationQuiz() {
    const quizDiv = document.getElementById("quiz");
    const randomBase = Math.random() < 0.5 ? 17 : 35;
    const randomMultiplier = Math.floor(Math.random() * 12) + 1;
    const correctAnswer = randomBase * randomMultiplier;

    quizDiv.innerHTML = `
        <p>What is ${randomBase} x ${randomMultiplier}?</p>
        <input id="answer" type="number" placeholder="Enter your answer">
        <button onclick="checkMathAnswer(${correctAnswer})">Submit</button>
    `;
}

function checkMathAnswer(correctAnswer) {
    const userAnswer = parseInt(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct answer was ${correctAnswer}.`);
    }
    questionsAnswered++;
    updateScore();
    startMultiplicationQuiz(); // Continue quiz
}

// Start Terminology Quiz
function startTerminologyQuiz() {
    const quizDiv = document.getElementById("quiz");
    const randomIndex = Math.floor(Math.random() * terminologyQuestions.length);
    const selectedQuestion = terminologyQuestions[randomIndex];

    quizDiv.innerHTML = `
        <p>${selectedQuestion.question}</p>
        <input id="answer" type="text" placeholder="Enter your answer">
        <button onclick="checkTerminologyAnswer('${selectedQuestion.answer}')">Submit</button>
    `;
}

function checkTerminologyAnswer(correctAnswer) {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    if (userAnswer === correctAnswer.toLowerCase()) {
        score++;
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct answer was '${correctAnswer}'.`);
    }
    questionsAnswered++;
    updateScore();
    startTerminologyQuiz(); // Continue quiz
}

// Update Score and Progress
function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("questions-answered").textContent = `Questions Answered: ${questionsAnswered}`;
}

// Draw Roulette Table
function drawRouletteTable() {
    const canvas = document.getElementById("roulette-canvas");
    const ctx = canvas.getContext("2d");

    // Outer Circle
    ctx.beginPath();
    ctx.arc(300, 300, 250, 0, Math.PI * 2);
    ctx.fillStyle = "#228B22";
    ctx.fill();

    // French Bets Text
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("Voisins du Zéro", 230, 200);
    ctx.fillText("Tiers du Cylindre", 210, 250);
    ctx.fillText("Orphelins", 270, 300);

    // Add further styling or details as needed
}

// Initialize Roulette Table on Load
window.onload = function () {
    drawRouletteTable();
};
