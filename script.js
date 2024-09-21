let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
let player = 1;
let win = false;
let moveCounter = 0;
let resetButton;

document.addEventListener("DOMContentLoaded", () => {
    boardEl = document.getElementById("board");
    resetButton = document.getElementById("reset");
    renderBoard();
    updateSidebar();
    window.addEventListener('keydown', function (event) {
        if (event.key === "r") {
            resetButton.click();
        }
    });
    boardEl.addEventListener("click", function (event) {
        const cell = event.target;
        if (cell.tagName !== "TD" || win) {
            return;
        }
        const colIndex = Array.from(cell.parentNode.children).indexOf(cell); // Get the column index
        if (dropToken(board, colIndex, player)) {
            moveCounter++;
            updateSidebar();
            player = (player % 2) + 1;
            checkWinner(board);
            renderBoard();
            updateSidebar();
            checkBoardFull();
        }
    });

    resetButton.addEventListener("click", function () {
        board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        player = 1;
        win = false;
        moveCounter = 0;

        renderBoard();
        updateSidebar();
        removeButton.remove();
    });
});

function checkBoardFull() {
    if (moveCounter === 42) {
        const gameOver = document.createElement("p");
        gameOver.innerText = "Game Over!";
        move.appendChild(gameOver);
        resetButton.style.display = "block";
    }
}

function updateSidebar() {
    resetButton.style.display = "block";

    const turn = document.getElementById("turn");
    const move = document.getElementById("move");
    if (win) {
        turn.innerText = "Player " + player + " wins!";
        // move.innerText += "\nGame Over!";
        const gameOver = document.createElement("p");
        gameOver.innerText = "Game Over!";
        move.appendChild(gameOver);

    } else {
        turn.innerText = "Player " + player + "'s turn";
        move.innerText = "Move: " + moveCounter;
    }
}

function dropToken(board, column, player) {
    for (let row = board.length - 1; row >= 0; row--) {
        if (board[row][column] === 0) {
            console.log("row: " + row + " column: " + column);
            board[row][column] = player;  // Place token for player 1 or 2
            return true;
        }
    }
    return false;  // Column is full
}

function renderBoard() {
    const table = document.getElementById("board");
    console.log(board);
    table.innerHTML = '';  // Clear previous table rows

    for (let row of board) {
        let tr = document.createElement("tr");  // Create a table row
        for (let cell of row) {
            let td = document.createElement("td");  // Create a table cell

            // Apply a class based on the value of the cell
            if (cell === 1) {
                td.className = "cell red";
            } else if (cell === 2) {
                td.className = "cell yellow";
            } else {
                if (win) {
                    td.className = "cell grey";
                } else {
                    td.className = "cell";
                }
            }
            tr.appendChild(td);  // Add the cell to the row
        }
        table.appendChild(tr);  // Add the row to the table
    }
    if (win) {
        let elements = document.getElementsByClassName("cell");
        for (let element of elements) {
            element.classList.add("win");
        }
    }
}

function checkWinner() {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] !== 0) {
                if (checkDirection(row, col, 1, 0) ||  // Check horizontal
                    checkDirection(row, col, 0, 1) ||  // Check vertical
                    checkDirection(row, col, 1, 1) ||  // Check diagonal
                    checkDirection(row, col, 1, -1)) {  // Check other diagonal
                    win = true;
                    return;
                }
            }
        }
    }
}

function checkDirection(row, col, rowDir, colDir) {
    const player = board[row][col];
    let count = 1;  // Number of tokens in a row

    count += checkDirectionHelper(row + rowDir, col + colDir, rowDir, colDir);
    count += checkDirectionHelper(row - rowDir, col - colDir, -rowDir, -colDir);

    return count >= 4;
}

function checkDirectionHelper(row, col, rowDir, colDir) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) {
        return 0;
    }
    if (board[row][col] === board[row - rowDir][col - colDir]) {
        return 1 + checkDirectionHelper(row + rowDir, col + colDir, rowDir, colDir);
    } else {
        return 0;
    }
}