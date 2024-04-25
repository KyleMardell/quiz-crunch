// Get sections from DOM
const welcomeSection = document.getElementById("welcome-section");
const choicesSection = document.getElementById("choices-section");
const questionSection = document.getElementById("question-section");
const scoreSection = document.getElementById("score-section");
const readyArea = document.getElementById("ready-area");
const gameArea = document.getElementById("game-area");

// Variables
let quizQuestions = [];
let playersName = "";

// Wait for the DOM to load and add event listeners
// to the welcome section buttons and logo text
document.addEventListener("DOMContentLoaded", function () {

    // Display welcome section, hide all other sections when clicked
    document.getElementById("logo-text").addEventListener("click", function () {
        console.log("logo clicked");
        displayWelcomeSection();
    });

    document.getElementById("logo-text").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            console.log("logo clicked");
            displayWelcomeSection();
        }
    });

    // Display user choice section when clicked
    document.getElementById("user-quiz-btn").addEventListener("click", function () {
        console.log("choose quiz clicked");
        toggleSectionsDisplay(welcomeSection, choicesSection);
    });


    // Display question-secion when clicked and
    // get 50 quiz questions from the quiz API
    document.getElementById("highscore-quiz-btn").addEventListener("click", function () {
        console.log("highscore quiz clicked");
        toggleSectionsDisplay(welcomeSection, questionSection);
        const url = createURL(["50", "", "dif-easy"]);
        fetchQuizQuestions(url);
    });
})

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
}

/**
 * Get questions from quiz API
 */
async function fetchQuizQuestions(url) {
    //const url = "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw "Error, response not ok"
        }

        const questionsData = await response.json();

        console.log(questionsData);
        console.log(questionsData.results);

        quizQuestions = questionsData.results;

    } catch (error) {
        console.log(error);
        alert("An error ocurred. Please try again.");
    }
}

/**
 * Get the user selected quiz choices
 * @returns array of choices (amount, category, difficulty)
 */
function getUserSelection() {
    const questionAmount = document.getElementById("question-amount").value;
    const chosenDifficulty = document.querySelector("input[name='difficulty']:checked").id;
    const chosenCategory = document.getElementById("category-choice").value;
    return [questionAmount, chosenCategory, chosenDifficulty];
}

/**  
 *  Process category choice for API use
 * @returns category URL extension
 * */
function processCategoryChoice(chosenCategory) {
    let category = "";

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

    console.log("processed category: " + category);
    return category;
}

/**  
 *  Process difficulty choice for API use
 * @returns difficulty URL extension
 * */
function processDifficultyChoice(chosenDifficulty) {
    let difficulty = "";

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

    console.log("processed difficulty: " + difficulty)
    return difficulty;
}

/**
 * Create the API URL from given parameters
 * @param {*} chosenArray (amount, category, difficulty) 
 * @returns API URL
 */
function createURL(chosenArray) {
    const amount = `amount=${chosenArray[0]}`;
    const category = processCategoryChoice(chosenArray[1]);
    const difficulty = processDifficultyChoice(chosenArray[2]);
    console.log("URL: " + amount, category, difficulty);
    return `https://opentdb.com/api.php?${amount}${category}${difficulty}&type=multiple`;
}

// When the user submits the quiz form 
// get and process user form data,
// create API URL and call the API fetch function
document.getElementById("choices-form").addEventListener("submit", function (event) {
    console.log("form submitted");
    event.preventDefault();

    const formData = getUserSelection();
    console.log("form data: " + formData);

    const url = createURL(formData);
    fetchQuizQuestions(url);
    console.log(quizQuestions);

    toggleSectionsDisplay(choicesSection, questionSection);
})

// Get the players name when the "let's play"
// button is pressed and display 
// the game area
document.getElementById("play-btn").addEventListener("click", function (event) {
    console.log("play button clicked");
    event.preventDefault();
    playersName = document.getElementById("user-name").value;

    if (playersName === "") {
        alert("Please enter your name");
        return;
    }

    console.log("player name: " + playersName);
    console.log(quizQuestions.length);
    //displayQuestion(quizQuestions[0]);
    toggleSectionsDisplay(readyArea, gameArea);
    playQuiz();
})

/**
 * Displays a question
 * questionData parameter is a single questio object
 * from the quizQuestions array from the API
 */
function displayQuestion(questionData) {
    const answers = [
        questionData.correct_answer,
        questionData.incorrect_answers[0],
        questionData.incorrect_answers[1],
        questionData.incorrect_answers[2]
    ]

    answers.sort(() => Math.random() - 0.5);

    document.getElementById("question-text").innerText = regexString(questionData.question);
    document.getElementById("answer1").innerText = regexString(answers[0]);
    document.getElementById("answer2").innerText = regexString(answers[1]);
    document.getElementById("answer3").innerText = regexString(answers[2]);
    document.getElementById("answer4").innerText = regexString(answers[3]);

    // reset feedback text
    document.getElementById("feedback-text").innerText = "";
}

/**
 * Removes regex strings from raw question data
 * and replaces them with correct quote characters
 */
function regexString(question) {
    const regex = /&quot;|&#039;|&ouml;|&uuml;|&iacute;|&oacute;/g;

    const questionString = question.replace(regex, str => {
        if (str === "&quot;") return '"';
        if (str === "&#039;") return "'";
        if (str === "&ouml;") return "ö";
        if(str === "&uuml") return "ü";
        if(str === "&iacute;") return "í";
        if(str === "&oacute;") return "ó";
    });

    return questionString;
}

/**
 * Checks if the user answered correctly
 * returns true if the did, false if not
 */
function checkAnswer(correctAnswer, chosenAnswer) {
    if (chosenAnswer === correctAnswer) {
        // increment score
        // display feedback
        return true;
    } else {
        // incorrect ansewer feedback
        return false;
    }
}

/**
 * Gets the users chosen answer from
 * the button pressed
 * @returns chosen answer string
 */
function getAnswer() {
    return new Promise((resolve) => {
        const answerButtons = document.getElementsByClassName("answer-btn");

        function answerSelected(event) {
            const answer = event.target.innerText;
            resolve(answer);
        }
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
    const answerButtons = document.getElementsByClassName("answer-btn");
    for (let button of answerButtons) {
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
 * Play quiz function
 * 
 */
// TO-DO 
// Add function to check answer result
// and display feedback to the user
async function playQuiz() {
    const questionsArray = quizQuestions;
    const questionAmount = questionsArray.length;

    let score = 0;

    for (i = 0; i < questionAmount - 1; i++) {

        displayQuestion(questionsArray[i]);
        document.getElementById("question-number").innerText = i + 1;
        document.getElementById("feedback-text").innerText = "Score: " + score + " / " + (i + 1);
        document.getElementById("feedback-text").style.color = "var(--blue)";

        const userAnswer = await getAnswer();
        highlightAnswerButtons(questionsArray[i].correct_answer);

        if (checkAnswer(questionsArray[i].correct_answer, userAnswer)){
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
    }

}