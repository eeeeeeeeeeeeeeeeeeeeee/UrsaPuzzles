# Phase 5: Statistics and Homepage (1 day)

## Rails
### Models
* User
* Puzzle

### Controllers
* UsersController

### Views
* puzzle/index.json.jbuilder

## Flux
### Views (React Components)
* UserStats
* UserCurrentGame
* PuzzleEasy
  * PuzzleEasyItem
* PuzzleMedium
  * PuzzleMediumItem
* PuzzleHard
  * PuzzleHardItem

### Stores
* User
* Puzzle

### Actions
* ApiActions.receivePlayerStats
* ApiActions.receiveEasyPuzzles
* ApiActions.receiveMediumPuzzles
* ApiActions.receiveHardPuzzles
* ApiActions.receiveCurrentGame

### ApiUtil
* ApiUtil.fetchPlayerStats
* ApiUtil.fetchEasyPuzzles
* ApiUtil.fetchMediumPuzzles
* ApiUtil.fetchHardPuzzles
* ApiUtil.fetchCurrentGame

## Gems/Libraries
