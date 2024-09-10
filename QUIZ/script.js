// Initialize an empty array for storing questions, the current question index, and the score.
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Select key elements from the DOM
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');

// Fetch questions from the external JSON file
async function fetchQuestions() {
    try {
        // Make a fetch request to get the questions from 'questions.json'
        const response = await fetch('questions.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the response into JSON and assign it to the 'questions' array
        questions = await response.json();
        // Load the first question after fetching the data
        loadQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}

// Load the current question and options onto the page
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    // Display the question text
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    // Create buttons for each answer option
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        // Add event listener to check the answer when clicked
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

// Check if the selected option is the correct answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    // Show the next button after the answer is selected
    nextButton.style.display = 'block';
}

// Show the final score at the end of the quiz
function showScore() {
    questionContainer.textContent = 'Quiz Over!';
    optionsContainer.innerHTML = '';
    scoreContainer.textContent = `Your score is ${score} out of ${questions.length}`;
    nextButton.style.display = 'none';
}

// Event listener for the next button to load the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        showScore();
    }
});

// Fetch the questions when the page is loaded
fetchQuestions();
