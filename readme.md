Identify the Problem:

1. What elements should we create variables for?

a variable to keep track of moves

2. What events should we listen for?

clicking on the grid squares

3. What elements need to be created?

divs for a 3x3 grid

4. How is user input handled?

clicks / event listeners

5. What do we need to keep track of?

the game moves

6. What can be calculated from the things we need to keep track of?

who's turn it is


/////////

Useful jQuery elements:

1. Appending an element to another element

.append()

2. Updating the HTML for an element

.html("the new value inside html")

3. Reading the HTML from an element

.html()

4. listening to events

.submit()
.on("submit")

5. Create a new element

$("<div> + variableHere + </div>");

6. Get value of input

.val()

////////

Pseudocode

Bronze:

When the user clicks, an X appears on the grid
When the user clicks again, an O appears on the grid
If there are 3 Xs or Os in a row or diagonally, X or O respectively wins

Silver:

There is a reset button that will clear the board and start again
Once a cell is marked, it's background color changes using js to change the class

////
