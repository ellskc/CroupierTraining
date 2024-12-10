let score = 0;

// Croupier terminology questions
const terminologyQuestions = [
    { question: "What is the term for a 21 in Blackjack?", answer: "Blackjack" },
    { question: "What is the dealer's device to shuffle cards?", answer: "Shoe" },
    { question: "What does 'push' mean in Blackjack?", answer: "Tie" },
    { question: "What is the term for splitting the pot equally?", answer: "Split Pot" },
    { question: "What does 'burn a card' mean?", answer: "Discard the top card" }
];

// Function to start 17 & 35 multiplication quiz
function startTableQuiz() {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    const isTable17 = Math.random() < 0.5; // Randomly decide between 17 and 35
    const baseNumber = isTable17 ? 17 : 35;
    const correctAnswer = baseNumber * randomNumber;

    document.getElementById("quiz-title").innerText = `Practice ${baseNumber} Table`;
    document.getElementById("quiz").innerHTML = `
        <p>What is ${baseNumber} x ${randomNumber}?</p>
        <input id="answer" type="number" placeholder="Enter your answer">
        <button onclick="checkTableAnswer(${correctAnswer})">Submit</button>
    `;
}

// Function to check answers for 17 & 35 multiplication quiz
function checkTableAnswer(correctAnswer) {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        score++;
        feedback.innerText = `Correct! The answer was ${correctAnswer}.`;
    } else {
        feedback.innerText = `Incorrect. The correct answer was ${correctAnswer}.`;
    }
    updateScore();
    startTableQuiz(); // Generate the next question
}

// Function to start terminology quiz
function startTerminologyQuiz() {
    const randomIndex = Math.floor(Math.random() * terminologyQuestions.length);
    const selectedQuestion = terminologyQuestions[randomIndex];

    document.getElementById("quiz-title").innerText = "Croupier Terminology Quiz";
    document.getElementById("quiz").innerHTML = `
        <p>${selectedQuestion.question}</p>
        <input id="answer"
