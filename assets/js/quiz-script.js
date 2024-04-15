// Get sections from DOM
const welcomeSection = document.getElementById("welcome-section");
const choicesSection = document.getElementById("choices-section");
const questionSection = document.getElementById("question-section");
const scoreSection = document.getElementById("score-section");

// Wait for the DOM to load and add event listeners
// to the welcome section buttons and logo text
document.addEventListener("DOMContentLoaded", function() {
    
    // Display welcome section, hide all other sections
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

function displayWelcomeSection() {
    choicesSection.style.display = "none";
    questionSection.style.display = "none";
    scoreSection.style.display = "none";
    welcomeSection.style.display = "flex";
}


