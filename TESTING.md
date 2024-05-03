# Testing

Testing in development was done using Google Chrome Developer Tools on a Windows 11 machine. When developing the site i used the "inspect" option within Google Chrome to test multiple things. I tested the design, layout and responsiveness of the site using the option to view different display sizes, as well as JavaScript testing using the console to check logged values.

The site was deployed to GitHub Pages early in development to initially check design features were displayed as intended, and later in development as a way to check for correct functionality of interactive features. I would test the deployed sites functionality after every coding session to ensure it was performing as inended.

## Validator

The following validation tools were used to validate the sites code.

- HTML Testing Using The [W3C Validator](https://validator.w3.org/)
    - [HTML Validation Link](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkylemardell.github.io%2Fquiz-crunch%2F)
    - [HTML Validation Results](/media/testing/html-validation.png)
- CSS Testing Using The [Jigsaw Validator](https://jigsaw.w3.org/css-validator/)
    - [CSS Validation Link](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkylemardell.github.io%2Fquiz-crunch%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    - [CSS Validation Results](/media/testing/css-validation.png)
- JavaScript Testing Using The [jshint Validator](https://jshint.com/)
    - [JavaScript Validation Results](/media/testing/js-validation.png)

## Lighthouse

I used lighhouse within the Google Chrome Developer tools to test the site for accessibilty, performance, SEO, and best practices. The site recieved 100 across all categories when testing on PC and when testing on mobile 99 for performance, with all other scores at 100.

- [Lighthouse Validation PC Results](/media/testing/lighthouse-desktop.png)
- [Lighthouse Validation Mobile Results](/media/testing/lighthouse-mobile.png)

## Wave

I ran the website through WAVE, the Web Accessibility Evaluation Tool, to check the accessibility of the site. There are no warning, with 3 alerts. There are 2 alerts for possibhle headings and 1 for a skipped heading. These are due to paragraph elements being used and the question number(h4) being displayed above the question(h3) on screen.

- [WAVE Validation Results](/media/testing/wave-summary.png)
- [WAVE Validation Details](/media/testing/wave-details.png)

## User Testing

Later in the development process I asked some friends, and course peers to test the site for usability and potential bugs. Overall initial feedback was positive with no major design changes or changes to the flow of the site needed. 

The initial feedback requiring changes to the site was, to increase the size of text in some areas sections. After recieving this feedback I tried to increase the text size across the majority of the site, leading to better readability. 

Secondly, in the form section users thought the "Get Questions" button should be green with either a green background, or green text to indicate that this button proceeds to the next section. With this feedback in mind, I changed the border and text colour to green to signify is it a submit button, also making the site feel more intuitive.

Some users feedback was that the high-score mode should be named differently, such as "practice mode" or "iron/hard mode", as all scores count towards the highscore board. This is agreed with and after some thought, I decided to change the name to "Marathon Mode" as it felt more fitting to the game type.

User feedback also helped to test for bugs. Any bugs found from user testing are listed in the [Bugs](#bugs) section.

## Site Testing

### Testing In Development

- HTML & CSS
    While developing the site I used Google Chrome Developer Tools to check the layout and responsiveness of the site. Developing from a mobile first perspective, using the latest "Galaxy Z Fold" screen size as my initial design platform, and limiting the section width on larger screens to create a similar layout across all screen sizes, with increased text size to make use of the additional screen space. 

- JavaScript
    Testing JavaScript in development done with a combination of Google Chrome Developer Tools and the Console Log function. I used the console log to display messages when a user clicked a button, the data from the API, and multiple variables values to check that the code was behaving as intended. Once I was confident that the site was working as expected, I then removed all the console logs to make my code cleaner and more readable. If any bugs were found, I would console log values in the area of the bug to try find the cause and create a fix.

## Bugs

### Fixed In Development

- The API being used was returning true/false questions as I had forgotten to add the multiple choice only option to the URL. This was caught the first time I displayed the answers to the answer buttons and added the URL extenstion for multiple choice only questions. 

- A bug where if the player clicked the logo link while playing a quiz, then started a new quiz, it would only play the remaining questions from the previous quiz before ending. Resulting in the second quiz only having 2/3 questions before ending. This was because the playQuiz function is asynchronus and was still running when the player exited a quiz early. To fix this, i added a boolean value called continueQuiz and an additional event listener to the logo button. If the logo is pressed when in a quiz, the event listener set continueQuiz to false and breaks from the current quiz loop and then returns from the current playQuiz function. This remedied the bug, meaning only one instance of the playQuiz function is running at any one time. This bug was caught in initial user testing.

### Known bugs

- A bug where text shows special character codes. I have added a number of special character codes to a regex function, but there are over 100 commonly in use today. For this project I felt it sufficient to add a few main ones to catch the most commonly encountered character codes, although the others will be shown.

- If the user tries to get too many quiz question calls from the API, it can cause an error. This is caused by calling the API too many times, too quickly. When this happens, I have implemented an alert message and navigated the user back to the welcome section.

- A bug where all answer boxes are displayed in red after a user presses an answer. This bug is very occasional.