# Quiz Crunch
Quiz Crunch is a website aimed at trivia enthusiasts looking to test their knowledge, learn new trivia and play for a local highscore. Visitors of the site can choose to play a highscore mode of 50 random questions, or alternatively pick their own quiz, with options for the number of questions, question category and difficulty. Highscores can be viewed on the highscore section.

![Responsive Mockup](/media/screenshots/responsive.png)

- The deployed site can be found at - [Quiz Crunch Site](https://kylemardell.github.io/quiz-crunch/)
- The repository can be found at - [Quiz Crunch Repo](https://github.com/KyleMardell/quiz-crunch)

- - -

## Contents

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

For the Quiz Crunch website I wanted to choose a darker background colour, complemented by a bright colour palette to create a fun theme with a modern look, appealing to a diverse audience.

![Background Colour](/media/design/background-colour.png)
![Colour Palette](/media/design/colour-pallete.png)

### Typography

I used [Google Fonts](https://fonts.google.com/) to import the fonts chosen for the site.

I used 2 similar looking fonts to add to the theme of the site. The font used for the headings is a bolder / weighted and capitalised font, as it is used in larger text. Both fonts are of a sans-serif style for better accessibility when reading on screens. The fonts used are named "Bungee" and "Passion One".

![Fonts](/media/design/fonts.png)

### Logo

I used Microsoft Paint and the chosen colour palette to create a simple logo. I used question marks and exclamation marks to make a fun and vibrant logo.

![Logo](/assets/images/logo.webp)

### Wireframes

Before developing the site I mocked up some simple wire-frames of some of the sections, in a mobile screen format. This helped when creating the sections and understanding the flow of the site, aiding in easier development. I ended up expanding on the sections in my initial wire-frame although it helped to establish a theme for the site. I made the site responsive by limiting the width to maintain a similar look to my initial wire-frame designs across all screen sizes.

![Mobile Wireframes](/media/design/wireframe.png)

## Features

### Existing Features

#### Favicon

I created a simple favicon using https://favicon.io/. I used the colours from my colour palette and font from the site, to follow the theme.

![Favicon](/assets/favicon/android-chrome-192x192.png)

#### Navigation Bar

For the navigation bar, I chose to simple display the name of the site as a clickable link that takes you back to the welcome screen. The site is simple and short to navigate, so a full navigation menu was not necessary

![Nav Bar](/media/screenshots/nav-bar.png)

#### Welcome Section

The welcome section is the landing page for the Quiz Crunch site. It displays a welcome heading and message to explain how to use the site.
From here users can: 
- Create their own quiz
- Play a 50 question, highscore mode quiz
- View local highscores

![Welcome Tablet](/media/screenshots/welcome-tablet.png)

[Mobile Screenshot](/media/screenshots/welcome-mobile.png) 

[Desktop Screenshot](/media/screenshots/welcome-desktop.png)

#### Form Section

Users can choose their own quiz to play, with options for the number of questions, difficulty (easy, medium and hard), and category (any, general knowledge, video games, music, sport, film).

![Form Tablet](/media/screenshots/form-tablet.png)

[Mobile Screenshot](/media/screenshots/form-mobile.png) 

[Desktop Screenshot](/media/screenshots/form-desktop.png)

#### Ready Section

The ready section serves to get the username of the player and give them time before the quiz begins. It also gives the API time to respond. If the response is not ok, the user should be returned to the welcome screen at this point.

![Ready Tablet](/media/screenshots/ready-tablet.png)

[Mobile Screenshot](/media/screenshots/ready-mobile.png)

[Desktop Screenshot](/media/screenshots/ready-desktop.png)

#### Quiz Section

The quiz section of the site is where the questions are displayed and the user plays the quiz. There is visual feedback for question number and current score while reading a question. Upon answering, the buttons change to green for a correct answer and red for all incorrect answers, again providing visual feedback to the user. This is delayed by 1.5 seconds before displaying a new question.

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

The scores section is where the user can view highscores. These highscores are stored using browser local storage and are therefore local to the users device and can be cleared at any time through browser settings. There is also a message to let the user know if no highscores are found.

![Scores Tablet](/media/screenshots/scores-tablet.png)

[Mobile Screenshot](/media/screenshots/scores-mobile.png)

[Desktop Screenshot](/media/screenshots/scores-desktop.png)

### Features To Add In The Future

## Deployment
- The site was deployed using GitHub Pages.
- The repositary can be found at - https://github.com/KyleMardell/quiz-crunch
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

- To clone the repositary
    - Login or Sign Up to GitHub
    - Naviagte to the repositary for this project [Quiz Crunch](https://github.com/KyleMardell/quiz-crunch)
    - Click on the "Code" button
    - Select how you would like to clone (HTTPS, SSH, or GitHub CLI)
    - Copy your chosen link
    - Open the terminal of your code editor or IDE
    - Change the current working directory to the location you want to use for the cloned directory
    - Type "git clone" into the terminal followed by the copied link and press enter.

## Testing
- Testing documentation can be found here !!! TO ADD !!!

## Credits

### Local Storage

I learned about local storage through the [freeCodeCamp](https://www.freecodecamp.org/learn/), and reading the [w3schools](https://www.w3schools.com/jsref/prop_win_localstorage.asp) documentation. I then watched a YouTube tutorial by [James Q Quick](https://www.youtube.com/@JamesQQuick) to see how to use local storage in practice and applied those methods in my code to create highscores.

### API

I learned the use of API's (Application Programming Interface) through [freeCodeCamps](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=8252s) YouTube course, and followed a YouTube tutorial on the [Pokemon API](https://www.youtube.com/watch?v=37vxWr0WgQk&t=673s) to get a better understanding of API's in practice. I also created a small project using a few different API's before applying these methods in my code for Quiz Crunch.
The API used for this site is the [Open Trivia Database](https://opentdb.com/).