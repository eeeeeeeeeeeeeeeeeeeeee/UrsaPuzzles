# Phase 2: Flux Architecture and Static Puzzle Rendering (2 days)

## Rails
### Models

### Controllers

### Views
* clue/index.json.jbuilder
* clue/show.json.jbuilder

## Flux
### Views (React Components)
* PuzzleGrid
* DownClues
* AcrossClues

### Stores
* Puzzle
* User
* Clue

### Actions
* ApiActions.receiveSingleSquare
* ApiActions.receiveWord
* ApiActions.receiveAllSquares
* ClueActions.receiveAcrossClues
* ClueActions.receiveDownClues

### ApiUtil
* ApiUtil.fetchSingleSquare
* ApiUtil.fetchWord
* ApiUtil.fetchAllSquares
* ApiUtil.fetchAcrossClues
* ApiUtil.fetchDownClues

fetch all full puzzle 
fetch all clues


## Gems/Libraries
* Flux Dispatcher
