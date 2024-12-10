// Global Variables
let score = 0;
let questionsAnswered = 0;
let currentQuestion = null;

// Terminology Questions
const terminologyQuestions = [
    { question: "What is 'en prison' in roulette?", answer: "Half-back bet" },
    { question: "What does 'split bet' mean?", answer: "Two numbers" },
    { question: "What is a 'corner bet'?", answer: "Four numbers" },
    { question: "What is the 'wheel' in roulette?", answer: "Spinning device" },
    { question: "What does 'call bet' mean?", answer: "Announced bet" },
];

// Multiplication Quiz Questions
const multipliers = [17, 35];

// Start Multiplication Quiz
function startMultiplicationQuiz() {
    const base = multipliers[Math.floor(Math.random() * multipliers.length)];
    const multiplier = Math.floor(Math.random() * 12) + 1;
    currentQuestion = {
        question: `What is ${base} x ${multiplier}?`,
        answer: base * multiplier,
    };
    displayQuestion();
}

// Start Terminology Quiz
function startTerminologyQuiz() {
    const randomIndex = Math.floor(Math.random() * terminologyQuestions.length);
    currentQuestion = terminologyQuestions[randomIndex];
    displayQuestion();
}

// Display Question
function displayQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    document.getElementById("quiz-question").textContent = currentQuestion.question;
    document.getElementById("quiz-answer").style.display = "inline-block";
    document.getElementById("submit-answer").style.display = "inline-block";
}

// Submit Answer
function submitAnswer() {
    const userAnswer = document.getElementById("quiz-answer").value.trim().toLowerCase();
    const correctAnswer = String(currentQuestion.answer).toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert(`Incorrect. The correct answer was: ${currentQuestion.answer}`);
    }

    questionsAnswered++;
    updateScore();
    resetQuizDisplay();
}

// Update Score and Reset Display
function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("questions-answered").textContent = `Questions Answered: ${questionsAnswered}`;
}

function resetQuizDisplay() {
    document.getElementById("quiz-answer").value = "";
    document.getElementById("quiz-question").textContent = "Click a button to start a quiz.";
    document.getElementById("quiz-answer").style.display = "none";
    document.getElementById("submit-answer").style.display = "none";
}

// Draw Roulette Table
function drawRouletteTable() {
    const canvas = document.getElementById("roulette-canvas");
    const ctx = canvas.getContext("2d");

    // Outer Circle
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, Math.PI * 2);
    ctx.fillStyle = "#228B22";
    ctx.fill();

    // Text Labels
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("Voisins du Zéro", 200, 180);
    ctx.fillText("Tiers du Cylindre", 180, 220);
    ctx.fillText("Orphelins", 240, 260);
}

// Initialize on Load
window.onload = drawRouletteTable;
