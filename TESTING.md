# Testing

Testing in development was done using Google Chrome Developer Tools on a Windows 11 machine. When developing the site, I used the "inspect" option within Google Chrome to test multiple things. I tested the design, layout, and responsiveness of the site using the option to view different display sizes, as well as JavaScript testing using the console to check logged values.

The site was deployed to GitHub Pages early in development to initially check that design features were displayed as intended, and later in development as a way to check for the correct functionality of interactive features. I would test the deployed sites functionality after every coding session to ensure it was performing as intnded.

## Contents
- [Validator](#validator)
- [Lighthouse](#lighthouse)
- [Wave](#wave)
- [Site Testing](#site-testing)
    - [In Development](#testing-in-development)
    - [User Testing](#user-testing)
- [Bugs](#bugs)
    - [Fixed Bugs](#fixed-in-development)
    - [Known Bugs](#known-bugs)

## Validator

The following validation tools were used to validate the site code.

- HTML Testing Using The [W3C Validator](https://validator.w3.org/)
    - [HTML Validation Link](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkylemardell.github.io%2Fquiz-crunch%2F)
    - [HTML Validation Results](/media/testing/html-validation.png)
- CSS Testing Using The [Jigsaw Validator](https://jigsaw.w3.org/css-validator/)
    - [CSS Validation Link](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkylemardell.github.io%2Fquiz-crunch%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    - [CSS Validation Results](/media/testing/css-validation.png)
- JavaScript Testing Using The [jshint Validator](https://jshint.com/)
    - [JavaScript Validation Results](/media/testing/js-validation.png)

## Lighthouse

I used lighthouse within the Google Chrome Developer tools to test the site for accessibility, performance, SEO, and best practices. The site received 100 across all categories when testing on PC, and when testing on mobile, 99 for performance, with all other scores at 100.

- [Lighthouse Validation PC Results](/media/testing/lighthouse-desktop.png)
- [Lighthouse Validation Mobile Results](/media/testing/lighthouse-mobile.png)

## Wave

I ran the website through WAVE, the Web Accessibility Evaluation Tool, to check the accessibility of the site. There are no warnings, with 3 alerts. There are 2 alerts for possible headings and 1 for a skipped heading. These are due to paragraph elements being used and the question number (h4) being displayed above the question (h3) on screen.

- [WAVE Validation Results](/media/testing/wave-summary.png)
- [WAVE Validation Details](/media/testing/wave-details.png)

## Site Testing

### Testing in Development

- HTML & CSS
    - While developing the site, I used Google Chrome Developer Tools to check the layout and responsiveness of the site. Developing from a mobile first perspective, using the latest "Galaxy Z Fold" screen size as my initial design platform, and limiting the section width on larger screens to create a similar layout across all screen sizes, with increased text size to make use of the additional screen space. 

- JavaScript
    - Testing JavaScript in development was done with a combination of Google Chrome Developer Tools and the Console Log function. I used the console log to display messages when a user clicked a button, the data from the API, and multiple variable values to check that the code was behaving as intended. Once I was confident that the site was working as expected, I removed all the console logs to make my code cleaner and more readable. If any bugs were found, I would console log values in the area of the bug to try find the cause and create a fix.

- Device Testing
    - Durin development I would frequently test the site on multiple devices I had available to me. I tested using an iPhone 14 and 15 with Safari and Chrome web browsers. I also tested the site using an iPad Pro 2022 model, again using Safari and Chrome. I also tested on a PC using Windows 11 with Chrome, Firefox, and Edge web browsers.
    I am glad I used real life devices at the end of each coding session, as layouts were often viewed differently due to browser controls taking up a portion of the screen.
    I had friends test the site on their devices also, and I found that on smaller devices with larger web browser control on screen, some of the sections required scrolling. Although I could not record which devices and browsers were being used, this did not affect the overall feel of the site.

### User Testing

Later in the development process, I asked some friends and course peers to test the site for usability and potential bugs. Overall, initial feedback was positive, with no major design changes or changes to the flow of the site needed. 

The initial feedback requiring changes to the site was, to increase the size of the text in some areas. After receiving this feedback, I tried to increase the text size across the majority of the site, leading to better readability. 

Secondly, in the form section, users thought the "Get Questions" button should be green with either a green background, or green text to indicate that this button proceeds to the next section. With this feedback in mind, I changed the border and text colour to green to signify it is a submit button, also making the site feel more intuitive.

Some users feedback was that the high-score mode should be named differently, such as "practice mode" or "iron/hard mode," as all scores count towards the high-score board. This is agreed with, and after some thought, I decided to change the name to "Marathon Mode" as it felt more fitting to the game type.

User feedback also helped to test for bugs. Any bugs found from user testing are listed in the [Bugs](#bugs) section.

### Manual Testing

| Feature | Expected Outcome | Test Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| NAVBAR |
| Logo text link | When clicked, redirects to the Welcome Section | Clicked logo | Redirected to Welcome Section | Pass |
| Logo text link: hover (desktop) | Changes curser to pointer | Hovered mouse over link | Curser changed to pointer | Pass |
| WELCOME SECTION |
| Choose Quiz button | When clicked, redirects to the Form Section | Clicked button | Redirected to Form Section | Pass |
| Choose Quiz button: hover (desktop) | Changes curser to pointer | Hovered mouse over button | Curser changed to pointer | Pass |
| Marathon Mode button | When clicked, redirects to the Ready Section | Clicked button | Redirected to Ready Section | Pass |
| Marathon Mode button: hover (desktop) | Changes curser to pointer | Hovered mouse over button | Curser changed to pointer | Pass |
| Show High Scores button: no quiz played | When clicked, redirects to the Scores Section, message displayed | Clicked button | Redirected to Scores section, message showing "No quiz score yet" | Pass |
| Show High Scores button: quiz played | When clicked, redirects to the Scores Section, displays last quiz score | Clicked button | Redirected to Scores section, displaying last quiz score | Pass |
| Show High Scores button: hover (desktop) | Changes curser to pointer | Hovered mouse over button | Curser changed to pointer | Pass |
| FORM SECTION |
| Number of Questions input: up-arrow | When clicked, allows user to increase the amount of questions (50 max) | Up-arrow button pressed | Question amount increases, stopping at 50 | Pass |
| Number of Questions input: down-arrow | When clicked, allows user to decrease the amount of questions (5 min) | Down-arrow button pressed | Question amount decreases, stopping at 5 | Pass |
| Number of Questions input: keyboard | Allows only numbers between 5 and 50 | Input letters & input numbers out of range | Warning alert displayed | Pass |
| Number of Questions input: hover (desktop) | Changes curser to pointer | Hovered mouse over input | Curser changed to pointer | Pass |
| Category dropdown | Options displayed | Clicked dropdown | Option dropdown shown | Pass |
| Category "Any" option | Any option selected | Clicked Any option | Any option selected | Pass |
| Category "General Knowlegde" option | General Knowlegde option selected | Clicked General Knowlegde option | General Knowlegde option selected | Pass |
| Category "Video Games" option | Video Games option selected | Clicked Video Games option | Video Games option selected | Pass |
| Category "Music" option | Music option selected | Clicked Music option | Music option selected | Pass |
| Category "Sport" option | Sport option selected | Clicked Sport option | Sport option selected | Pass |
| Category "Film" option | Film option selected | Clicked Film option | Film option selected | Pass |
| Category dropdown: hover (desktop) | Changes curser to pointer | Hovered mouse over dropdown | Curser changed to pointer | Pass |
| Difficulty Easy radio button | When clicked, selects "Easy" and un-chekcs all other radio buttons | Clicked radio button | Easy option selected only | Pass |
| Difficulty Easy radio button: hover (desktop) | Changes curser to pointer | Hovered mouse over button | Curser changed to pointer | Pass |
| Difficulty Medium radio button | When clicked, selects "Medium" and un-chekcs all other radio buttons | Clicked radio button | Medium option selected only | Pass |
| Difficulty Medium radio button: hover (desktop) | Changes curser to pointer | Hovered mouse over button | Curser changed to pointer | Pass |
| Difficulty Hard radio button | When clicked, selects "Hard" and un-chekcs all other radio buttons | Clicked radio button | Hard option selected only | Pass |
| Difficulty Hard radio button: hover (desktop) | Changes curser to pointer | Hovered mouse over button | Curser changed to pointer | Pass |
| Get Questions Button | When clicked, redirects to Ready Section (form correctly filled) | Clicked button | Redirected to Ready Section | Pass |
| Get Questions Button | When clicked, redirects to Ready Section (form in-correctly filled) | Clicked button | Warning alert displayed | Pass |
| READY SECTION |
| Name input | When clicked, allows user to input their name | Clicked input, entered name | Name Entered | Pass |
| Name input: hover (desktop) | Changes curser to pointer | Hovered mouse over link | Curser changed to pointer | Pass |
| Let's Play button | When clicked, redirects to Quiz Section (name input entered) | Clicked button | Redirected to Quiz Section | Pass |
| Let's Play button | When clicked, displays warning alert (name input empty) | Clicked button | Alert warning displayed | Pass |
| Let's Play button: hover (desktop) | Changes curser to pointer | Hovered mouse over link | Curser changed to pointer | Pass |
| QUIZ SECTION |
| Answer button: correct | When clicked, button turns green and all other button turn red. Text feeback displayed in green. New question displayed with increased score. | Clicked correct answer button | Button turned green, all other buttons turned red. Green "correct" message displayed. New question displayed, score increased | Pass |
| Answer button: incorrect | When clicked, button turns red (with other incorrect answers) and correct answer turns green. Text feeback displayed in red. New question displayed. | Clicked incorrect answer button | Button turned red, correct answer turned green. Red "wrong" message displayed. New question displayed | Pass |
| Answer button: final question | When clicked, displays feedback with delay, then redirects to Scores Section and displays score | Clicked answer button | Feedback displayed, redirected to Scores Section. Score displayed | Pass |
| Answer button: hover (desktop) | Changes curser to pointer | Hovered mouse over link | Curser changed to pointer | Pass |
| SCORES SECTION |
| Play New Quiz button | When clicked, redirects to Welcome Section | Clicked button | Redirected to Welcome Section | Pass |

## Bugs

### Fixed in Development

- The API being used was returning true or false questions, as I had forgotten to add the multiple choice only option to the URL. This was caught the first time I displayed the answers to the answer buttons and added the URL extension for multiple choice only questions. 

- A bug where if the player clicked the logo link while playing a quiz, then started a new quiz, it would only play the remaining questions from the previous quiz before ending. Resulting in the second quiz only having 2/3 questions before ending. This was because the playQuiz function is asynchronous and was still running when the player exited a quiz early. To fix this, i added a boolean value called continueQuiz and an additional event listener to the logo button. If the logo is pressed when in a quiz, the event listener sets continueQuiz to false, breaks from the current quiz loop, and then returns from the current playQuiz function. This remedied the bug, meaning only one instance of the playQuiz function is running at any one time. This bug was caught in initial user testing.

### Known bugs

- A bug where text shows special character codes. I have added a number of special character codes to a regex function, but there are over 100 commonly in use today. For this project, I felt it was sufficient to add a few main ones to catch the most commonly encountered character codes, although the others will be shown in either the question or the answer text.

- If the user tries to get too many quiz question calls from the API, it can cause an error. This is caused by calling the API too many times too quickly. When this happens, I have implemented an alert message and navigated the user back to the welcome section.

- A bug where all answer boxes are displayed in red after a user presses an answer. Scores are still counted, and feedback is shown in text form. This bug is very occasional and intermittent and would therefore take a larger amount of time than feasible for this project to fix. I wish to return to this project in the future and resolve this bug.