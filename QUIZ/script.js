// Initialize an empty array for storing questions, the current question index, and the score.
let questions = []; // Stores the quiz questions loaded from the JSON file.
let currentQuestionIndex = 0; // Keeps track of the current question being displayed.
let score = 0; // Keeps track of the user's score.

// Select key elements from the DOM
const questionContainer = document.getElementById('question-container'); // The container for displaying the current question.
const optionsContainer = document.getElementById('options-container'); // The container for displaying the answer options.
const nextButton = document.getElementById('next-button'); // The button to proceed to the next question.
const scoreContainer = document.getElementById('score-container'); // The container for displaying the user's final score.

// Fetch questions from the external JSON file
async function fetchQuestions() {
    try {
        // Make a fetch request to get the questions from 'questions.json'
        const response = await fetch('questions.json'); // Requests the 'questions.json' file from the server.
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Throws an error if the request fails (e.g., due to network issues).
        }
        // Parse the response into JSON and assign it to the 'questions' array
        questions = await response.json(); // Converts the JSON response into a JavaScript array and assigns it to the 'questions' variable.
        // Load the first question after fetching the data
        loadQuestion(); // Calls the function to load the first question after the questions are successfully fetched.
    } catch (error) {
        console.error('Error fetching questions:', error); // Logs any errors that occur during the fetch request.
    }
}

// Load the current question and options onto the page
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex]; // Retrieves the current question based on the 'currentQuestionIndex'.
    // Display the question text
    questionContainer.textContent = currentQuestion.question; // Updates the question container with the current question.
    optionsContainer.innerHTML = ''; // Clears the options container to remove previous options.

    // Create buttons for each answer option
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button'); // Creates a new button element for each answer option.
        button.textContent = option; // Sets the button text to the option.
        // Add event listener to check the answer when clicked
        button.addEventListener('click', () => checkAnswer(option)); // Adds a click event listener to the button, which checks if the selected option is correct.
        optionsContainer.appendChild(button); // Appends the button to the options container.
    });
}

// Check if the selected option is the correct answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex]; // Retrieves the current question to compare the selected answer.
    if (selectedOption === currentQuestion.answer) {
        score++; // If the selected option matches the correct answer, increment the score by 1.
    }
    // Show the next button after the answer is selected
    nextButton.style.display = 'block'; // Displays the "Next Question" button after an answer is selected.
}

// Show the final score at the end of the quiz
function showScore() {
    questionContainer.textContent = 'Quiz Over!'; // Replaces the question text with a message that the quiz is over.
    optionsContainer.innerHTML = ''; // Clears the options container.
    scoreContainer.textContent = `Your score is ${score} out of ${questions.length}`; // Displays the user's final score in the score container.
    nextButton.style.display = 'none'; // Hides the "Next Question" button after the quiz is finished.
}

// Event listener for the next button to load the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++; // Increment the index to load the next question.
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load the next question if there are more questions left.
        nextButton.style.display = 'none'; // Hide the "Next Question" button until the next answer is selected.
    } else {
        showScore(); // If there are no more questions, display the final score.
    }
});

// Fetch the questions when the page is loaded
fetchQuestions(); // Calls the function to fetch and load questions as soon as the page is loaded.

