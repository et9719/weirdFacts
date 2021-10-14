# Weird Facts Quiz

<!-- description of quiz -->

[Click here to go to the live website!](ADD LINK) 

<img src="" alt="Live website image">

## Table of contents

1. [Client Expectations](#client-expectations)
2. [User Expectations](#user-expectations)
3. [Wireframes](#wireframes)
    - [Start](#start)
    - [Instructions](#instructions)
    - [Feedback](#feedback)
    - [Quiz](#quiz)
    - [Results](#results)
    - [Mobile wireframes](#mobile-wireframes)    
4. [Features](#features)
    - [Logo](#logo)
    - [The start area](#the-start-area)
    - [The score area](#the-score-area)
    - [Instructions area](#instructions-area)
    - [Feedback area](#feedback-area)
    - [Quiz area](#quiz-area)
    - [Results sections](#results-sections)
5. [Testing](#testing)
    - [HTML](#html)
    - [CSS](#css)
    - [Bugs](#bugs)
6. [Deployment](#deployment)
7. [Credits](#credits)
    - [Content](#content)
    - [Media](#media)


## Client Expectations



## User Expectations



## Wireframes

### Start
<img src="assets/images/startSection.png" alt="wireframe for starting page">

### Instructions
<img src="assets/images/instructions.png" alt="wireframe for instructions page">

### Feedback 
<img src="assets/images/feedback.png" alt="wireframe for the feedback page">

### Quiz 
<img src="assets/images/quizSection.png" alt="wireframe for the quiz section">

### Results
<img src="assets/images/results.png" alt="wireframe for the page shown when at the end of the quiz">

### Mobile wireframes
<img src="assets/images/mobile-wireframes1.png" alt="wireframe for start page instructions and feedback form if they are on a mobile device">
<img src="assets/images/mobile-wireframes2.png" alt="wireframe for questions and results if they are on a mobile device">

## Features

### Logo
 - The Weird Facts Quiz logo was made on procreate by myself. I wanted a logo that would go well with the rest of the quiz. I had decided on using a font called 'Special Elite' for my quiz to make it look like it had been written on a typewriter, so I drew my logo with that in mind.

<img src="assets/images/logo-feature.png" alt="image of logo on website">

### The start area
 - This is the first page you see when the quiz loads. On this page there are three options, the first option being the instructions, second being start which activtes the quiz itself and the last option being Give feedback. Each of these options when clicked on will take you to their corasonding pages. 

<img src="assets/images/start-area.png" alt="image of the start area on website">

### The score area
 - The score area is shown at the bottom of the page, this is here so that the user can see how many questions they have got correct and how many are incorrect throughout the quiz.

<img src="assets/images/score-area.png" alt="image of the score area on website">

### Instructions area
 - The instructions area is shown when instructions is clicked on the start page, it contains three simple instructions explaining how the quiz works followed by an exit button that will take you back to the start area.

<img src="assets/images/instructions-area.png" alt="image of the instructions area on website"> 

### Feedback area
 - This area is a place where users can leave feedback or even other intersting facts. They can do this by entering their text into the form and pressing submit underneith. There is also an exit button that will again take you back to the start area. 

<img src="assets/images/feedback-area.png" alt="image of the Feedback area on website"> 

### Quiz area
 - The quiz area is the space in which the questions are asked and the user gives their answers. It consists of a questions at the top and 4 answer choices. when the user clicks on a choice their choice will light up either red or green depending on if the answer they chose was correct or not. once a choice is made the score area underneither will be adjusted and the next button will pop up at the bottom under the answer choices. When the next button is pressed it will move onto the next question. 

<img src="assets/images/quiz-area.png" alt="image of the quiz area on website"> 

 - When the user gets to the last question, the next button will be an end button instead as there will be no more questions for the user to answer. When they click on the end button is will take them onto one of two result sections. 

 <img src="assets/images/last-q.png" alt="image of the quiz area with end button on website"> 

### Results sections
 - When the user gets to the end of the quiz they will see either the congrats area if they get 5 or more questions correct, or they will see the try again area if they got less than 5 correct. These areas both have a little message to the user followed by a restart button that will reset teh while quiz and take them back to the start area. 

 <img src="assets/images/congrats-area.png" alt="image of the congrats area on website"> 

 <img src="assets/images/tryagain-area.png" alt="image of the try again area on website"> 

## Testing

### HTML

HTML was tested using the official [W3C validator](https://validator.w3.org/nu/) 

The HTML results came back with no errors.
The following warnings were found:

<img src="assets/images/html-warnings.png" alt="image of warnings">

- All warnings were showing empty headings. This is because they were left empty to allow different words to be placed inside the headings throughout the quiz using javaScript. 

### CSS
 
 CSS was tested using the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
 
No errors were found in the css:

   <img src="assets/images/css.png" alt="CSS test showing no error">  

### JavaScript

JavaScript was tested using js hint [js hint validator](https://jshint.com/) 

The JavaScript results came back with the following:

<img src="assets/images/javascript-warnings.png" alt="image of errors">

1. A warning for a missing semicolon on line 96

- To resolve this I went to line 96 and placed the semicolon where needed.

2. It found two undefined variables, congrats on line 143 and tryAgain on line 146. 

- For both of these i worte a variable using getElementById to pull them from the html.

3. It found three unused variables, choices on line 20, restartBtn on line 27 and restart on line 153.

- choices was not needed so it was deleted.
- 


### Manual Testing 

Component | Function | Does it work? | Fixed? 
--------- | --------- | ----------------- | ------ |



I also carried out manual testing which tested the responsiveness of the website.
I have tested my site on the following devices:

- Moto G4
- Galaxy S5
- Pixel 2
- iphone 5/SE
- iphone 6/7/8
- iphone 6/7/8 Plus
- iPad
- ipad pro
- Desktop 


### Bugs

1. I found that when the user chose an answer, there seemed to be no limit on how many times they can make a choice on the same question before pressing the next button and therefore could add as many correct and incorrect points as they like on each questions.

- fixed? YES

- what did i do?
 
  To fix this i had to find a way to disable all choices when a user makes their first choice on each question.
  To do that I created a variable called answerDisable and gave it the value of false to start with. 
  In the function where i added a selected class to the choice the user selected, I added an if statement that says if answerDisabled is equal to true then return null. The null value removes and values the choice objects had disabling the use of them. right after the if statement in the userAnswer function I wrote answerDisable = true to put that if statement into use. 
  In the show next question function, when the next button is pressed, I put answerDisabled = false to allow the use of the choice buttons again for the next question. 

2.

-fixed? 

- what did i do ?

    <img src="" alt="Screenshot of the site used to help solve issue">  

 ## Deployment

 The site was deployed to GitHub pages.

The steps to deploy are as follows:

- First, I created a new repository by clicking new in the GitHub repository menu
- I used the Code-institute-Org/gitpod-full-template and created a repository name.
- I continued by clicking in the create repository button at the bottom of the page.
- When it had been created, I then went to settings.
- Scrolled down to Github pages where it says "Pages settings now has its own dedicated tab! Check it out here!" And I followed the link.
- When on Github pages I selected the source to be the main branch and pressed save.
- A message then pops up that says, " Your site is ready to be published at Your site is published at ADD LINK and when clicked on will take you to the site. 

 ## Credits

 ### Content

1. https://gitpod.io/workspaces and https://github.com/ : were used to create the site

2.

3. 


 ### Media

1. https://uizard.io/ : This was used to create the wireframes used to design the site.

2. Procreate : This app was used to make the weird facts logo.

3. 






