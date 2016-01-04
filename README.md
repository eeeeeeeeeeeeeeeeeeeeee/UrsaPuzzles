# Erato Puzzles

[Erato Puzzles] (http://eratopuzzles.io)

## Minimum Viable Product

Erato Puzzles is a web application that allows users to play interactive crossword puzzles.  Built with Ruby on Rails and React.js, Erato allows users to:

* Create an account
* Log in / Log Out
* Select puzzles based on skill level
* Play crossword puzzles with interactive features:
  * Check entered letters are correct
  * Reveal puzzle solution
  * Clear entire puzzle
  * In-puzzle highlighting of selected clue and intersecting clue
  * Clickable clue lists to reposition active square
  * Auto-repositioning of current square for quick solving
  * Ability to dynamically move through puzzle via variety of key commands
  * Timer showing time-elapsed

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Rails Backend, and Basic DB Seeding (1 day)

For this phase, I plan to build the user signup and authentication process using BCrypt.  In this beginning process, I want to complete the Rails backend work of setting up all my models and controllers.  This will include creating basic views with JSON renderings of the required data.  To do this, I will begin to seed the database with puzzles, and get my project loaded into Heroku.

[Details][phase-one]


### Phase 2: Flux Architecture and Static Puzzle Rendering (2 days)

In Phase 2 I will work on setting up the Flux architecture, React Router, and the React views for my app.  The majority of my work with React will be on the puzzle page itself, so in this phase I want to ensure I can render at least a static, fully filled in puzzle page.  This will include square number labelling, scroll boxes for down and across puzzle clues, and puzzle information.  This phase will require integration of CSS, Bootstrap, and React.  

[Details][phase-two]

### Phase 3: Interactivity (3 Days)

Phase 3 will focus on making the game interactive.  There are many conditions to be met here, with each of the 225 squares having unique associations and actions.  Selecting a clue will highlight the corresponding puzzle grid location and show the intersected clue.  As a user types, he or she will be incremented along the word, skipping letters already entered and updating the highlighting of any intersected clues. Additionally, the user will be able to click on a clue and have all the interactive features auto-update.  At the very top will be a timer, indicating the time elapsed, as well as buttons for reveal, check, and clear.  

[Details][phase-three]

### Phase 4: Homepage (1 day)

Phase 4 will move away from the puzzle page, and focus on the user's homepage, from which he/she can select a puzzle by difficulty.  Puzzle will be marked as new, in-progress, or solved, allowing the user to resume a game or start anew.  

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1 day)

Add final touches to styling and improve overall UI as neccessary.  I also will seed the database with more puzzles.  Lastly, I want to thoroughly and methodically test the app for both functionality and user acceptance.    


### Bonus Features (TBD)
* Statistics and metrics reporting
* Site tour
* Profile setup and customization for users
* Live stats on other users activity
* Email confirmation upon signup
* Dictionary lookup

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
