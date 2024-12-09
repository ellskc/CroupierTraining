// Simple Multiplication Quiz
let score = 0;

function startQuiz() {
    const question = document.getElementById("quiz");
    const random1 = Math.floor(Math.random() * 12) + 1;
    const random2 = Math.floor(Math.random() * 12) + 1;
    const correctAnswer = random1 * random2;

    question.innerHTML = `
        <p>What is ${random1} x ${random2}?</p>
        <input id="answer" type="number" placeholder="Enter your answer">
        <button onclick="checkAnswer(${correctAnswer})">Submit</button>
    `;
}

function checkAnswer(correctAnswer) {
    const userAnswer = document.getElementById("answer").value;
    const feedback = document.getElementById("score");

    if (parseInt(userAnswer) === correctAnswer) {
        score++;
        feedback.innerHTML = `Correct! Your score is ${score}.`;
    } else {
        feedback.innerHTML = `Incorrect. The correct answer was ${correctAnswer}. Your score is ${score}.`;
    }

    startQuiz(); // Move to the next question
}
