[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/NRL7CmDA)
# HW2: Basic Web Game

## Objective
Create a basic web game using HTML, CSS, and JavaScript. This project will help you practice
fundamental DOM manipulation, event handling, and code organization techniques.

## Requirements

### Game Selection
Choose one of the following game options or create your own:
- Whack-a-Mole
- Tic-Tac-Toe
- Chess
- Snake
- Connect 4

### Document Selection (2 points)
- Use a single selector: `getElementById` or `querySelector` (1 point)
- Use a multi-selector: `getElementsByClassName`, `getElementsByTag`, or `querySelectorAll` (1 point)

### DOM Manipulation (4 points)
- Element creation: `document.createElement(...)` (1 point)
- Element attachment: `[element].[replaceChildren or appendChild](...)` (1 point)
- Element deletion: `[element].remove()` (1 point)
- Element mutation: `[element].[style or textContent] = [new_value]` (1 point)

### Event Listeners (4 points)
- Element-attached event: Your choice (ex. `onclick` on a button) (2 points)
- Window-attached event: Restart the game by pressing 'r' (2 points)
  - Use `window.addEventListener('keydown', [some_function])`

### Code Readability (4 points)
- Proper indentation of HTML (1 point)
- Proper indentation of JS (1 point)
- Meaningful variable names (2 points)

### Code Correctness (6 points)
- Game does not crash while playing (6 points)

### Extra Features (5 bonus points)
Implement additional features beyond the basic requirements, such as:
- Leaderboard
- Animations
- Any other features that enhance the game experience


Ultimately, your game just needs to be interactive in some way (not necessarily complete) and meet the criteria stated above. Anything beyond that will be considered for extra credit.

## Game-Specific Notes
- Whack-a-Mole: Have an element that periodically moves around the page. If the player manages to hit the element, increment their score.
- Tic-Tac-Toe: Create a 3x3 grid where players take turns selecting empty boxes to place an "X" or "O" on. You are NOT expected to detect when a player wins.
- Chess: Create an 8x8 grid with chess pieces players take turns moving by clicking a from square, then a to square. You are NOT expected to check move legality or write special logic for checkmate, check, castling, en-passant, etc.
- Snake: Create a snake that periodically moves forward and changes direction when arrow keys are pressed. You are NOT expected to place apples (or squares) for the snake to eat and grow in size.
- Connect 4: Create a grid where players take turns placing chips into columns. You are NOT expected to detect when a player wins.

Note: For games requiring timing logic, look up `setTimeout` and/or `setInterval`.

MDN Documentation:
- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

## Submission Guidelines

1. An HTML file named `index.html` which contains the game.

Feel free to make additional JS and CSS files as needed.
Template code has been provided which includes a HTML, CSS, and JS file. Feel free to modify the template or add/remove files as needed.
