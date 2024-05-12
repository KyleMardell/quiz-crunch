# Quiz Crunch
Quiz Crunch is a website aimed at trivia enthusiasts looking to test their knowledge, learn new trivia, and play for a local high score. Visitors to the site can choose to play a high score mode of 50 random questions, alternatively pick their own quiz, with options for the number of questions, question category, and difficulty. Highscores can be viewed in the high score section.

![Responsive Mockup](/media/screenshots/responsive.png)

- The deployed site can be found at - [Quiz Crunch Site](https://kylemardell.github.io/quiz-crunch/)
- The repository can be found at - [Quiz Crunch Repo](https://github.com/KyleMardell/quiz-crunch)

- - -

## Contents

- [User Experience](#user-experience)
    - [First Time Visitor Goals](#first-time-visitor-goals)
    - [Returning Visitor Goals](#returning-visitor-goals)
- [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Logo](#logo)
    - [Wireframes](#wireframes)
- [Features](#features)
    - [Existing Features](#existing-features)
        - [Favicon](#favicon)
        - [Nav Bar](#navigation-bar)
        - [Welcome Section](#welcome-section)
        - [Form Section](#form-section)
        - [Ready Section](#ready-section)
        - [Quiz Section](#quiz-section)
        - [Scores Section](#scores-section)
    - [Accessibility](#accessibility)
    - [JavaScript](#javascript)
    - [Future Features](#features-to-add-in-the-future)
- [Deployment](#deployment)
    - [GitHub Deployment](#github-deployment)
    - [Fork Repository](#fork-repositary)
    - [Clone](#clone-repositary)
- [Testing](#testing)
- [Credits](#credits)
    - [Local Storage](#local-storage)
    - [API](#api)
    - [Logo](#logo-image)

- - -

## User Experience

### First Time Visitor Goals

- To test general quiz knowledge
- To test quiz knowledge in a selected subject
- Discover interesting trivia
- Enjoy a fun learning experience
- Play a quiz with friends, testing collective knowledge

### Returning Visitor Goals

- To play for a highscore entry
- To beat previous highscores
- To practice quiz knowledge in a selected subject
- To challenge themselves with more difficult questions

## Design

### Colour Scheme

For the Quiz Crunch website, I wanted to choose a darker background colour, complemented by a bright colour palette, to create a fun theme with a modern look, appealing to a diverse audience. I used the brighter colours to highlight certain parts of the site, such as buttons and options.

![Background Colour](/media/design/background-colour.png)
![Colour Palette](/media/design/colour-pallete.png)

### Typography

I used [Google Fonts](https://fonts.google.com/) to import the fonts chosen for the site.

I used 2 similar-looking fonts to add to the theme of the site. The font used for the headings is bolder and capitalised as it is used in larger text. Both fonts are in a sans-serif style for better accessibility when reading on screens. The fonts used are named "Bungee" and "Passion One." As the site is very simple in design, the typography played a large part in creating the "feel" of the site. I think the 2 fonts used are easy to read on screens, which is a must, but they also have complementary styles and fit well, when used with the chosen colour scheme.

![Fonts](/media/design/fonts.png)

### Logo

I used Microsoft Paint and the chosen colour palette to create a simple logo. I used question marks and exclamation marks to make a fun and vibrant logo. I then ran the image through the AI image generator, [imagine.art]](https://www.imagine.art/) to create a professional, fun looking logo. Although the AI image generator changed some of the colours used in the image, I feel as though the logo fits the theme of the site very well. 

![Logo](/assets/images/logo.webp)

### Wireframes

Before developing the site, I mocked up some simple wireframes of some of the sections, in a mobile screen format. This helped when creating the sections and understanding the flow of the site, aiding in easier development. I ended up expanding on the sections in my initial wireframe although it helped establish a theme for the site. I made the site responsive by limiting the width to maintain a similar look to my initial wire-frame designs across all screen sizes.

[Mobile Wireframes](/media/design/wireframe.png)

## Features

The site is made up of one single page, split into 5 different sections, with only one section being shown at a time. The 5 sections are welcome, form, ready, quiz, and high scores.

From the welcome section, the user can decide to choose their own quiz, play a random 50 question quiz, or view their local highscores. 

When playing the quiz, the question will be shown with 4 answers, each in their own box. The user must press or click on their chosen answer to submit it. Once an answer has been pressed, the correct answer border is momentarily changed to green and all incorrect answers to red. There is also a "correct / wrong" feedback message displayed in place of the current score. The next question is automatically displayed until all questions have been played. There is no time limit for any questions.

Once all questions have been answered, the scores section is displayed, showing the ending quiz score and the top 5 high scores. This page can be viewed before playing a quiz, with a "no score to display" message shown.

### Existing Features

#### Favicon

I created a simple favicon using https://favicon.io/. I used the colours from my colour palette and the font from the site, to follow the theme.

![Favicon](/assets/favicon/android-chrome-192x192.png)

#### Navigation Bar

For the navigation bar, I chose to simply display the name of the site as a clickable link that takes you back to the welcome screen. The site is simple and easy to navigate, so a full navigation menu was not necessary.

![Nav Bar](/media/screenshots/nav-bar.png)

#### Welcome Section

The welcome section is the landing page for the Quiz Crunch site. It displays a welcome heading and message to explain how to use the site.
From here, users can: 
- Create their own quiz
- Play a 50 question, highscore mode quiz
- View local high scores

![Welcome Tablet](/media/screenshots/welcome-tablet.png)

[Mobile Screenshot](/media/screenshots/welcome-mobile.png) 

[Desktop Screenshot](/media/screenshots/welcome-desktop.png)

#### Form Section

Users can choose their own quiz to play, with options for the number of questions, difficulty (easy, medium, and hard), and category (any, general knowledge, video games, music, sport, or film). Scores from a user selected quiz also count towards the local highscores.

![Form Tablet](/media/screenshots/form-tablet.png)

[Mobile Screenshot](/media/screenshots/form-mobile.png) 

[Desktop Screenshot](/media/screenshots/form-desktop.png)

#### Ready Section

The ready section serves to get the username of the player and give them time before the quiz begins. It also gives the API time to respond. If the response is not OK, the user should be returned to the welcome screen at this point.

![Ready Tablet](/media/screenshots/ready-tablet.png)

[Mobile Screenshot](/media/screenshots/ready-mobile.png)

[Desktop Screenshot](/media/screenshots/ready-desktop.png)

#### Quiz Section

The quiz section of the site is where the questions are displayed, and the user plays the quiz. There is visual feedback for question number and current score while reading a question. Upon answering, the buttons change to green for a correct answer and red for all incorrect answers, again providing visual feedback to the user. This is delayed by 1.5 seconds before displaying a new question.

![Quiz Tablet](/media/screenshots/quiz-tablet.png)

[Mobile Screenshot](/media/screenshots/quiz-mobile.png)

[Desktop Screenshot](/media/screenshots/quiz-desktop.png)

[Mobile Correct Answer](/media/screenshots/quiz-correct-mobile.png)

[Tablet Correct Answer](/media/screenshots/quiz-correct-tablet.png)

[Desktop Correct Answer](/media/screenshots/quiz-correct-desktop.png)

[Mobile Incorrect Answer](/media/screenshots/quiz-wrong-mobile.png)

[Tablet Incorrect Answer](/media/screenshots/quiz-wrong-tablet.png)

[Desktop Incorrect Answer](/media/screenshots/quiz-wrong-desktop.png)

#### Scores Section

The scores section is where the user can view high scores. These high scores are stored using browser local storage, and are therefore local to the user's device, and can be cleared at any time through browser settings. There is also a message to let the user know if no highscores are found, or no current quiz has been played.

![Scores Tablet](/media/screenshots/scores-tablet.png)

[Mobile Screenshot](/media/screenshots/scores-mobile.png)

[Desktop Screenshot](/media/screenshots/scores-desktop.png)

### Accessibility

As I wanted to make a simple quiz site for any player, accessibility was always in mind when developing the site. I made sure to use semantic HTML for screen reader users and a high contrast colour palette for visual aids. As the site has a simple layout, I also tried to make the text as large as possible without overly compromising the design of the site.

### JavaScript

When developing the site, I wanted to think about future development and make my code as easily readable and maintainable as possible.

With this in mind, when developing the site, one of the first functions I created was a re-usable function that can easily display and hide sections, seeming to switch between pages. All sections are declared as global variables at the beginning of the JavaScript file and can be easily expanded or referenced. The function takes 2 parameters: the current section displayed and the new section to display. If a section is added to the site in the future, it can be added and displayed with relative ease.

While developing the site's functionality, I refactored a large amount of the code. I tried to keep to an atomic function style, meaning each function does one specific task.

However, there are cases where it feels more readable to have a function complete multiple tasks. 
The most notable function is the "playQuiz" function. This is essentially the game loop, which is responsible for displaying all the questions and keeping score until the quiz ends and is the largest function in the script.
I could continue to refactor the code, but at a potential disadvantage to its readability for myself or anyone else who may expand on or further develop the site. 

### Features to Add in the Future

In the future, i would like to improve the site by adding the following features:
- Timed mode
- Mode specific highscores
- Online highscores
- Additional categories

## Deployment
- The site was deployed using GitHub Pages.
- The repository can be found at - https://github.com/KyleMardell/quiz-crunch
- The deployed site can be found at - https://kylemardell.github.io/quiz-crunch/

### GitHub Deployment

- To deploy using GitHub pages
    - Login or Sign Up to GitHub
    - Open the project repository
    - Navigate to "Settings" on the navigation bar under the repository title
    - Click on "Pages" in the left hand navigation panel
    - Under "Source", choose which branch to deploy (Main or Master)
    - Choose which folder to deploy from, usually "/root"
    - Click "Save", then wait for the page to be deployed
    - The URL is displayed above "Source"

### Fork Repositary

- To fork the reositary
    - Login or Sign Up to GitHub
    - Navigate to the repository for this project [Quiz Crunch](https://github.com/KyleMardell/quiz-crunch)
    - Click the "Fork" button on the top right of the page

### Clone Repositary

- To clone the repository
    - Login or Sign Up to GitHub
    - Naviagte to the repositary for this project [Quiz Crunch](https://github.com/KyleMardell/quiz-crunch)
    - Click on the "Code" button
    - Select how you would like to clone (HTTPS, SSH, or GitHub CLI)
    - Copy your chosen link
    - Open the terminal of your code editor or IDE
    - Change the current working directory to the location you want to use for the cloned directory
    - Type "git clone" into the terminal followed by the copied link and press enter.

## Testing
- Testing documentation can be found [here](/TESTING.md)

## Credits

### Local Storage

I learned about local storage through the [freeCodeCamp](https://www.freecodecamp.org/learn/), and reading the [w3schools](https://www.w3schools.com/jsref/prop_win_localstorage.asp) documentation. I then watched a YouTube tutorial by [James Q Quick](https://www.youtube.com/watch?v=DFhmNLKwwGw&t=562s) to see how to use local storage in practice and applied those methods in my code to create saved high scores.

### API

I learned the use of API's (Application Programming Interface) through [freeCodeCamps](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=8252s) YouTube course, and followed a YouTube tutorial on the [Pokemon API](https://www.youtube.com/watch?v=37vxWr0WgQk&t=673s) to get a better understanding of API's in practice. I also created a small project using a few different APIs before applying these methods to my code for Quiz Crunch.
The API used for this site is the [Open Trivia Database](https://opentdb.com/).

### Logo Image

I created an initial logo image mockup in Microsoft Paint and put it through an AI image generator to produce the logo used on the site. The image generator used was the [imagine.art]](https://www.imagine.art/) tool.