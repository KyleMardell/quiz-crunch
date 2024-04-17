// Get sections from DOM
const welcomeSection = document.getElementById("welcome-section");
const choicesSection = document.getElementById("choices-section");
const questionSection = document.getElementById("question-section");
const scoreSection = document.getElementById("score-section");

// Wait for the DOM to load and add event listeners
// to the welcome section buttons and logo text
document.addEventListener("DOMContentLoaded", function() {
    
    // Display welcome section, hide all other sections when clicked
    document.getElementById("logo-text").addEventListener("click", function() {
        console.log("logo clicked");
        displayWelcomeSection();
    });

    document.getElementById("logo-text").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            console.log("logo clicked");
            displayWelcomeSection();
        }
    });

    // Display user choice section when clicked
    document.getElementById("user-quiz-btn").addEventListener("click", function() {
        console.log("choose quiz clicked");
        toggleSectionsDisplay(welcomeSection, choicesSection);
    });


    // Display question-secion when clicked
    document.getElementById("highscore-quiz-btn").addEventListener("click", function() {
        console.log("highscore quiz clicked");
        toggleSectionsDisplay(welcomeSection, questionSection);
        fetchQuizQuestions();
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
    welcomeSection.style.display = "flex";
}

/**
 * Get questions from quiz API
 */
async function fetchQuizQuestions() {
    const url = "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple";

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw "Error, response not ok"
        }

        const questionsData = await response.json();
        console.log(questionsData);
        console.log(questionsData.results);
        return questionsData.results;

    } catch (error) {
        console.log(error);
    }
}

// Get the user selected quiz choices
function getUserSelection() {
    const questionAmount = document.getElementById("question-amount").value;
    const chosenDifficulty = document.querySelector("input[name='difficulty']:checked").id;
    const chosenCategory = document.getElementById("category-choice").id;
    return[questionAmount, chosenCategory, chosenDifficulty];
}

document.getElementById("choices-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = getUserSelection();
    console.log(formData);
})