

let currentQuestion = 0;
let score = 0;
let quizStartTime; // Variable to store the start time of the quiz
const totalTime = 900; // Total time for each question (in seconds)
let elapsedTime = 0; // Elapsed time since the quiz started (in seconds)
let timerInterval; // Interval for updating the timer

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('start-btn');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const previousButton = document.getElementById('previous-btn');
const timerDisplay = document.getElementById('time');
const showScoreButton = document.getElementById('show-score-btn');
const restartButton = document.createElement('button'); // New button for restart
restartButton.textContent = 'Restart Quiz';
restartButton.style.display = 'none'; // Initially hidden
restartButton.addEventListener('click', restartQuiz); // Event listener for restart quiz button
document.body.appendChild(restartButton); // Append to body element

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitAnswer);
nextButton.addEventListener('click', nextQuestion);
previousButton.addEventListener('click', previousQuestion);
showScoreButton.addEventListener('click', showScore);

// Clear all previously selected options when the webpage is first loaded
for (let i = 0; i < quizData.length; i++) {
    localStorage.removeItem(`selectedOption_${i}`);
}

function startQuiz() {
    startButton.style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    nextButton.style.display = 'block';
    previousButton.style.display = 'block';
    restartButton.style.display = 'block'; // Show restart button
    quizStartTime = new Date(); // Record the start time of the quiz
    timerInterval = setInterval(updateTimer, 1000); // Start the timer
    loadQuestion();
}

function updateTimer() {
    const currentTime = new Date();
    const timeDiff = (currentTime - quizStartTime) / 1000; // Time difference in seconds
    elapsedTime = Math.floor(timeDiff);

    const remainingSeconds = totalTime - elapsedTime;

    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds; // Add leading zero for seconds < 10
    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        showScore(); // Calculate and display score when timer runs out
    }

    // Disable next button when on last question
    if (currentQuestion === quizData.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }

    // Show score button when all questions are answered
    if (currentQuestion === quizData.length - 1) {
        showScoreButton.style.display = 'block';
    }
}


function loadQuestion() {
    for(currentQuizData in quizData)
    {
     currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', selectOption);
        optionsElement.appendChild(button);
    });
    // Load the previously selected option for the current question, if available
    loadPreviousOption();
    }
}

function selectOption(e) {
    const selectedOption = e.target;
    const currentQuizData = quizData[currentQuestion];
    const optionButtons = document.querySelectorAll('.option-btn');

    // First, remove the 'selected' class from all option buttons
    optionButtons.forEach(button => {
        button.classList.remove('selected');
    });

    // Then, add the 'selected' class to the clicked option button
    selectedOption.classList.add('selected');

    // Store the selected option for this question in localStorage
    localStorage.setItem(`selectedOption_${currentQuestion}`, selectedOption.innerText);
}




// Function to load the previously selected option for the current question, if available
function loadPreviousOption() {
    const previousOption = localStorage.getItem(`selectedOption_${currentQuestion}`);
    if (previousOption) {
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            if (button.innerText === previousOption) {
                button.classList.add('selected');
            }
        });
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        // Adjust the start time of the quiz to account for the elapsed time
        quizStartTime = new Date(new Date() - (elapsedTime * 1000));
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        // Adjust the start time of the quiz to account for the elapsed time
        quizStartTime = new Date(new Date() - (elapsedTime * 1000));
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('.option-btn.selected');
    if (!selectedOption) return; // If no option is selected, do nothing

    selectedOption.classList.remove('selected'); // Remove the 'selected' class from the previously selected option
    nextQuestion(); // Move to the next question
}

function finishQuiz() {
    clearInterval(timerInterval);
    document.getElementById('question-container').style.display = 'none';
    nextButton.style.display = 'none';
    previousButton.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.innerText = `You scored ${score}/${quizData.length}`;
}

function showScore() {
    let totalScore = 0;
    
    for (let i = 0; i < quizData.length; i++) {
        const selectedOption = localStorage.getItem(`selectedOption_${i}`);
        const currentQuizData = quizData[i];
        
        if (selectedOption === currentQuizData.answer) {
            totalScore++;
        }
    }

    // Clear previous elements
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    previousButton.style.display = 'none';
    resultElement.style.display = 'none';
    showScoreButton.style.display = 'none';

    // Show score
    restartButton.style.display = 'block';
    restartButton.style.marginTop = '20px';
    resultElement.style.display = 'block';
    resultElement.innerText = `You scored ${totalScore}/${quizData.length}`;
}


function restartQuiz() {
    // Clear all previously selected options
    for (let i = 0; i < quizData.length; i++) {
        localStorage.removeItem(`selectedOption_${i}`);
    }

    // Reset variables
    currentQuestion = 0;
    score = 0;
    elapsedTime = 0;

    // Clear result and hide restart button
    resultElement.style.display = 'none';
    restartButton.style.display = 'none';

    // Restart quiz
    startQuiz();
}
