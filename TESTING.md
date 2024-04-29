# Testing

Testing in development was done using Google Chrome Developer Tools on a Windows 11 machine. When developing the site i used the "inspect" option within Google Chrome to test multiple things. I tested the design, layout and responsiveness of the site using the option to view different display sizes, as well as JavaScript testing using the console to check logged values.

The site was deployed to GitHub Pages early in development to initially check design features were displayed as intended, and later in development as a way to check for correct functionality of interactive features. I would test the deployed sites functionality after every coding session to ensure it was performing as inended.

## Validator

- HTML Testing Using The [W3C Validator](https://validator.w3.org/)
    - [Quiz Crunch HTML Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkylemardell.github.io%2Fquiz-crunch%2F)
![HTML Validation](/media/testing/html-validation.png)
- CSS Testing Using The [Jigsaw Validator](https://jigsaw.w3.org/css-validator/)
    - [Quiz Crunch CSS Validation] (https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkylemardell.github.io%2Fquiz-crunch%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
![CSS Validation](/media/testing/css-validation.png)
- JavaScript Testing Using The [jshint Validator](https://jshint.com/)
![JS Validation](/media/testing/js-validation.png)

## Lighthouse

## Wave

## User Testing

## Site Testing

## Bugs

### Fixed In Development

- API was returning true/false questions as I had forgotten to add the multiple choice only option to the URL. This was caught the first time I displayed the answers to the answer buttons and added the URL extenstion for multiple choice only questions. 

### Known bugs

- A bug where text shows special character codes. I have added a number of special character codes to a regex function, but there are over 100 commonly in use today. For this project i felt it sufficient to add a few main ones to catch the most commonly encountered character codes, although the others will be shown.

- If the user tries to get too many quiz question calls from the API, it can cause an error. This is caused by calling the API too many times, too quickly. When this happens, I have implemented an alert message and navigated the user back to the welcome section.