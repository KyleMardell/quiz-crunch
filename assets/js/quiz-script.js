// Get sections from DOM
const welcomeSection = document.getElementById("welcome-section");
const choicesSection = document.getElementById("choices-section");
const questionSection = document.getElementById("question-section");
const scoreSection = document.getElementById("score-section");
const readyArea = document.getElementById("ready-area");
const gameArea = document.getElementById("game-area");

// Variables
let quizQuestions = [];

// Wait for the DOM to load and add event listeners
// to the welcome section buttons and logo text
document.addEventListener("DOMContentLoaded", function () {

    // Display welcome section, hide all other sections when clicked
    document.getElementById("logo-text").addEventListener("click", function () {
        displayWelcomeSection();
    });

    document.getElementById("logo-text").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            displayWelcomeSection();
        }
    });

    // Display user choice section when clicked
    document.getElementById("user-quiz-btn").addEventListener("click", function () {
        toggleSectionsDisplay(welcomeSection, choicesSection);
    });


    // Display question-secion when clicked and
    // get 50 quiz questions from the quiz API
    document.getElementById("highscore-quiz-btn").addEventListener("click", function () {
        toggleSectionsDisplay(welcomeSection, questionSection);
        const url = createURL(["50", "", "dif-easy"]);
        fetchQuizQuestions(url);
    });

    // Display scores section when clicked and
    // display highscores from local data
    document.getElementById("show-scores-btn").addEventListener("click", function () {
        toggleSectionsDisplay(welcomeSection, scoreSection);
        displayHighscores();
    });

    // Return to welcome section when clicked
    // from the highscores section
    document.getElementById("play-again").addEventListener("click", function() {
        displayWelcomeSection();
    });
});

/**
 * Toggle the display style (flex, none)
 * of the two entered sections
 */
function toggleSectionsDisplay(currentSection, newSection) {
    currentSection.style.display = "none";
    newSection.style.display = "flex";
}

/**
 * Display welcome section, hide all other sections
 */
function displayWelcomeSection() {
    choicesSection.style.display = "none";
    questionSection.style.display = "none";
    scoreSection.style.display = "none";
    gameArea.style.display = "none";
    readyArea.style.display = "flex";
    welcomeSection.style.display = "flex";
    quizQuestions = [];
}

/**
 * Get questions from quiz API using
 * try/catch to handle any response errors
 */
async function fetchQuizQuestions(url) {

    // Try fetch quiz questions from the API
    // using created input URL
    try {
        const response = await fetch(url);

        // If the response is not ok, throw an error
        if (!response.ok) {
            throw "Error, response not ok";
        }

        // Await API response and assign it to quizQuestions variable
        const questionsData = await response.json();
        quizQuestions = questionsData.results;

    } catch (error) {
        // If an error occurs, display an alert and return to the welcome section
        alert("An error ocurred. Please try again.");
        displayWelcomeSection();
    }
}

/**
 * Get the user selected quiz choices
 * returns array of choices (amount, category, difficulty)
 */
function getUserSelection() {
    const questionAmount = document.getElementById("question-amount").value;
    const chosenDifficulty = document.querySelector("input[name='difficulty']:checked").id;
    const chosenCategory = document.getElementById("category-choice").value;
    return [questionAmount, chosenCategory, chosenDifficulty];
}

/**  
 *  Process category choice for API use
 * */
function processCategoryChoice(chosenCategory) {
    let category = "";

    // Checks user selection
    switch (chosenCategory) {
        case "any":
            category = "";
            break;
        case "general-knowledge":
            category = "&category=9";
            break;
        case "games":
            category = "&category=15";
            break;
        case "music":
            category = "&category=12";
            break;
        case "sport":
            category = "&category=21";
            break;
        case "film":
            category = "&category=11";
            break;
        default:
            category = "";
    }
    return category;
}

/**  
 * Process difficulty choice for API use
 * */
function processDifficultyChoice(chosenDifficulty) {
    let difficulty = "";

    // Checks user selection
    switch (chosenDifficulty) {
        case "dif-easy":
            difficulty = "&difficulty=easy";
            break;
        case "dif-med":
            difficulty = "&difficulty=medium";
            break;
        case "dif-hard":
            difficulty = "&difficulty=hard";
            break;
        default:
            difficulty = "&difficulty=easy";
    }
    return difficulty;
}

/**
 * Create the API URL from given parameters array
 * (amount, category, difficulty) 
 */
function createURL(chosenArray) {
    const amount = `amount=${chosenArray[0]}`;
    const category = processCategoryChoice(chosenArray[1]);
    const difficulty = processDifficultyChoice(chosenArray[2]);
    return `https://opentdb.com/api.php?${amount}${category}${difficulty}&type=multiple`;
}

// When the user submits the quiz form 
// get and process user form data,
// create API URL and call the API fetch function
document.getElementById("choices-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = getUserSelection();
    const url = createURL(formData);

    fetchQuizQuestions(url);
    toggleSectionsDisplay(choicesSection, questionSection);
});

// Get the players name when the "let's play"
// button is pressed and display 
// the game area
document.getElementById("play-btn").addEventListener("click", function (event) {
    event.preventDefault();

    // Get username
    const userName = document.getElementById("user-name").value;

    // Checks username is not empty
    if (userName === "") {
        alert("Please enter your name");
        return;
    }

    // Change display to game/quiz section and run quiz
    toggleSectionsDisplay(readyArea, gameArea);
    playQuiz(userName);
});

/**
 * Displays a question and
 * answers in a random order
 */
function displayQuestion(questionData) {
    // Create an array of answers
    const answers = [
        questionData.correct_answer,
        questionData.incorrect_answers[0],
        questionData.incorrect_answers[1],
        questionData.incorrect_answers[2]
    ];

    // Randomise answer order
    answers.sort(() => Math.random() - 0.5);

    // Display question and answers
    document.getElementById("question-text").innerText = regexString(questionData.question);
    document.getElementById("answer1").innerText = regexString(answers[0]);
    document.getElementById("answer2").innerText = regexString(answers[1]);
    document.getElementById("answer3").innerText = regexString(answers[2]);
    document.getElementById("answer4").innerText = regexString(answers[3]);

    // reset feedback text
    document.getElementById("feedback-text").innerText = "";

    // Resets focus to first answer for accessibilty
    document.getElementById("answer1").focus();
}

/**
 * Removes regex strings from raw question data
 * and replaces them with correct quote characters
 */
function regexString(question) {
    const regex = /&quot;|&#039;|&ouml;|&uuml;|&iacute;|&oacute;|&Eacute;|&amp;|&eacute;|&rsquo;/g;

    // Checks if a regex is found and replaces it
    const questionString = question.replace(regex, str => {
        if (str === "&quot;") return '"';
        if (str === "&#039;") return "'";
        if (str === "&rsquo;") return "'";
        if (str === "&ouml;") return "ö";
        if (str === "&uuml") return "ü";
        if (str === "&iacute;") return "í";
        if (str === "&oacute;") return "ó";
        if (str === "&Eacute;") return "É";
        if (str === "&amp;") return "&";
        if ( str === "&eacute;") return "é";
    });

    return questionString;
}

/**
 * Checks if the user answered correctly
 */
function checkAnswer(correctAnswer, chosenAnswer) {
    if (chosenAnswer === correctAnswer) {
        return true;
    } else {
        return false;
    }
}

/**
 * Gets the users chosen answer from
 * the button pressed
 * returns chosen answer string
 */
function getAnswer() {
    // Await answer button press
    return new Promise((resolve) => {
        const answerButtons = document.getElementsByClassName("answer-btn");

        // Returns the text of the chosen answer button
        function answerSelected(event) {
            const answer = event.target.innerText;
            resolve(answer);
        }
        // Loop through the answer buttons, apply once only event listener
        for (let button of answerButtons) {
            button.addEventListener("click", answerSelected, { once: true });
        }
    });
}

/**
 * Highlights the correct answer button in green
 * and all the others in red 
 */
function highlightAnswerButtons(correctAnswer) {
    // Get and loop through all buttons
    const answerButtons = document.getElementsByClassName("answer-btn");
    for (let button of answerButtons) {
        // check if the button text is the same as the correct answer
        if (button.innerText === correctAnswer) {
            button.style.borderColor = "var(--green)";
        } else {
            button.style.borderColor = "var(--red)";
        }
    }
}

/**
 * Resets answer button colours
 */
function resetAnswerButtonColours() {
    document.getElementById("answer1").style.borderColor = "var(--green)";
    document.getElementById("answer2").style.borderColor = "var(--purple)";
    document.getElementById("answer3").style.borderColor = "var(--yellow)";
    document.getElementById("answer4").style.borderColor = "var(--red)";
}

/**
 * Displays user score in the score section
 */
function displayScores(score, total, userName) {

    let scoreMessage = "";

    // Check if users correct answer score is
    // more than 50% of total questions answered
    if (score > (total / 2)) {
        scoreMessage = `Well done ${userName}! You scored ${score} / ${total}`;
    } else {
        scoreMessage = `Unlucky ${userName}. You scored ${score} / ${total}`;
    }

    document.getElementById("quiz-score").innerHTML = scoreMessage;
}

/**
 * Saves scores to highscores in local storage
 */
function saveHighscore(newScore, userName) {

    // Get highScores array from local storage or create an empty array
    const highScores = JSON.parse(localStorage.getItem("quizHighscores")) || [];
    // create new score object from parameters
    const score = {
        name: userName,
        score: newScore
    };

    // Add score to the highScores array
    highScores.push(score);

    // sort the array by highest score first
    highScores.sort((a, b) => b.score - a.score);

    // Cut array size to 5
    highScores.splice(5);

    // Set highScores array in local storage
    localStorage.setItem("quizHighscores", JSON.stringify(highScores));
}

/**
 * Creates a list items from highscores array
 * and displays them in the scores section
 */
function displayHighscores() {
    // Get highScores array from local storage or create an empty array
    const highScores = JSON.parse(localStorage.getItem("quizHighscores")) || [];
    let highscoreList = "";

    // Check if highscores already exist
    if (highScores.length === 0) {
        highscoreList = '<li>No scores to display</li>';
    } else {
        // Create highscores list in html
        for (let score of highScores) {
            highscoreList += `<li>${score.name} : ${score.score}</li>`;
        }
    }

    // Display message to user
    document.getElementById("highscores").innerHTML = highscoreList;
}

/**
 * Play quiz function
 * 
 */
async function playQuiz(playersName) {
    // Assign questions and amount variables from stored aPI results
    const questionsArray = quizQuestions;
    const questionAmount = questionsArray.length;

    // Initialise user quiz score
    let score = 0;

    // Bool to check if the quizz should continue
    let continueQuiz = true;

    // Get the logo text
    const welcomeSectionLink = document.getElementById("logo-text");
    
    // Set continueQuiz to false and remove event listener to avoid conflicts
    const welcomeListener = function () {
        continueQuiz = false;
        welcomeSectionLink.removeEventListener("click", welcomeListener);
    };
    welcomeSectionLink.addEventListener("click", welcomeListener);

    // Loop through questions
    for (let i = 0; i < questionAmount; i++) {

        // Display current question
        displayQuestion(questionsArray[i]);

        // Display current score and question number
        document.getElementById("question-number").innerText = i + 1;
        document.getElementById("feedback-text").innerText = "Score: " + score + " / " + questionAmount;
        document.getElementById("feedback-text").style.color = "var(--blue)";

        // Await users answer input
        const userAnswer = await getAnswer();

        // Highlight correct answer
        highlightAnswerButtons(regexString(questionsArray[i].correct_answer));

        // Check is the answer is correct and increment score if so
        // and show feedback message
        if (checkAnswer(regexString(questionsArray[i].correct_answer), userAnswer)) {
            document.getElementById("feedback-text").innerText = "Correct!";
            document.getElementById("feedback-text").style.color = "var(--green)";
            score++;
        } else {
            document.getElementById("feedback-text").innerText = "Wrong :(";
            document.getElementById("feedback-text").style.color = "var(--red)";
        }

        // Add a delay after feedback
        await new Promise(resolve => setTimeout(resolve, 1500));

        resetAnswerButtonColours();

        // Check if the quiz shoulc continue
        if(!continueQuiz) {
            break;
        }
    }

    // Check if the quiz should continue
    if(!continueQuiz) {
        return;
    }

    // Display scores after a quiz finishes
    displayScores(score, questionAmount, playersName);
    saveHighscore(score, playersName);
    displayHighscores();

    // Change display to scores section
    toggleSectionsDisplay(questionSection, scoreSection);
}

