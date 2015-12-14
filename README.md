# Crossword

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Erato is a web application that allows users to play interactive crossword puzzles.  Built with Ruby on Rails and React.js, Erato allows users to:

* Create an account
* Log in / Log Out
* Track game performance statistics
* Select puzzles based on skill level or theme
* Play crossword puzzles with interactive features:
  * Check if square, word, or puzzle is correct
  * Reveal square, word, or puzzle
  * Clear entire puzzle
  * In-puzzle highlighting of selected clue
  * 'Pencil' option for educated guesses
  * Auto-repositioning of current square for quick solving
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

In Phase 2 I will work on setting up the Flux architecture, React Router, and the React views for my app.  The majority of my work with React will be on the puzzle page itself, so in this phase I want to ensure I can render at least a static, fully filled in puzzle page.  This will include square number labelling, scroll boxes for down and across puzzle clues, and puzzle information.  This phase will require integration of HTML, CSS, and React.  

[Details][phase-two]

### Phase 3: Interactivity (2 Days)

Phase 3 will focus on making the game interactive.  There are many conditions to be met here, with each of the 225 squares having unique associations and actions.  Selecting a clue will highlight the corresponding puzzle grid location and show the intersected clue.  As a user types, he or she will be incremented along the word, skipping letters already entered and updating the highlighting of any intersected clues.  I will also implement a 'pencil' mode, where the letters entered by the user and shown in a different color, indicating hesitation about their accuracy.  At the very top will be a timer, indicating the time elapsed.  

[Details][phase-three]

### Phase 4: Check and Reveal (1 day)

Phase 4 is dedicated to adding features to assist the user in solving the puzzles.  A user can choose to reveal or check a single box, word, or the entire puzzle.  This will prevent the win from being counted towards the player's statistics.  I will also add notifications about winning and statistics.  

[Details][phase-four]

### Phase 5: Statistics and Homepage (1 day)

Phase 5 will move away from the puzzle page, and focus on the user's homepage, statistics report, and playing history.  There will be features for the user to browse available puzzles, sorting by difficulty.  A user can also select to resume a previously played game.  

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Add final touches to styling and improve overall UI as neccessary.  I also will thoroughly seed the database with more puzzles.  Lastly, I want to thoroughly and methodically test the app for both functionality and user acceptance.    


### Bonus Features (TBD)
* Profile setup and customization for users
* Advanced statistics and metrics reporting
* Live stats on other users activity
* Email confirmation upon signup

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
