document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');

    const quizQuestions = [
        {
            question: "What is the primary cause of climate change?",
            options: ["Volcanic activity", "Burning of fossil fuels", "Solar radiation", "Tectonic shifts"],
            answer: "Burning of fossil fuels"
        },
        {
            question: "Which of these gases is a greenhouse gas?",
            options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What can you do to reduce your carbon footprint?",
            options: ["Use more plastic", "Drive more often", "Recycle and reuse", "Cut down trees"],
            answer: "Recycle and reuse"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const questionObj = quizQuestions[currentQuestion];
        quizContainer.innerHTML = `
            <h2>${questionObj.question}</h2>
            <div>
                ${questionObj.options.map((option, index) => `
                    <button onclick="selectAnswer('${option}', this)">${option}</button>
                `).join('')}
            </div>
        `;
    }

    window.selectAnswer = function (selectedOption, buttonElement) {
        const correctAnswer = quizQuestions[currentQuestion].answer;
        const buttons = quizContainer.querySelectorAll("button");

        buttons.forEach(button => {
            button.disabled = true; // Disable all buttons once an answer is selected
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = "#4caf50"; // Green for correct answer
            } else if (button.textContent === selectedOption) {
                button.style.backgroundColor = "#f44336"; // Red for wrong answer
            }
        });

        if (selectedOption === correctAnswer) {
            score++;
        }

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizQuestions.length) {
                loadQuestion();
            } else {
                quizContainer.innerHTML = `<h2>You scored ${score}/${quizQuestions.length}! Well done!</h2>
                                           <button onclick="restartQuiz()">Play Again</button>`;
            }
        }, 1000); // Delay for 1 second before showing the next question
    };

    window.restartQuiz = function () {
        currentQuestion = 0;
        score = 0;
        loadQuestion();
    };

    loadQuestion();
});
