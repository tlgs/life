/**
 * @file Conway's Game of Life engine logic,
 * as well as the `canvas` manipulation.
 *
 * JavaScript does not have a built-in immutable collection
 * data structure (tuple) to represent a cell, so a single integer is used:
 * x + 100 * y. This inherently restricts the board size.
 *
 * The focus of this file (and project) is on the Game of Life logic
 * (the `tick` function) and not on the graphical component;
 * as such, features such as refresh rate and cell colours are hard-coded.
 */

/** Yield all the neighbors of a cell. */
function* neighbors(x) {
    yield x - 1;
    yield x + 1;
    yield x - 100;
    yield x + 100;
    yield x - 101;
    yield x + 101;
    yield x - 99;
    yield x + 99;
}

/** Generate the next board state according to the game's rules. */
function tick(board) {
    let calc = new Set(board);
    for (const cell of board) {
        for (const neighbor of neighbors(cell)) {
            calc.add(neighbor);
        }
    }

    let nextBoard = new Set();
    for (const cell of calc) {
        let alive = [...neighbors(cell)].reduce((acc, x) => acc + board.has(x), 0)
        if (alive == 3 || (board.has(cell) && alive == 2)) {
            nextBoard.add(cell)
        }
    }

    return nextBoard
}

/**
 * Handle all of the DOM manipulation logic to reflect the board's state.
 * It is the function that is repeatedly called by `window.setInterval()`.
 */
function draw() {
    let ctx = document.getElementById('grid').getContext('2d');

    ctx.clearRect(0, 0, 600, 600);

    // draw grid
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)';
    for (let i = 0; i < 31; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * 20);
        ctx.lineTo(600, i * 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(i * 20, 0);
        ctx.lineTo(i * 20, 600);
        ctx.stroke();
    }

    for (const cell of board) {
        ctx.beginPath();
        ctx.arc((cell % 100) * 20 + 10, Math.floor(cell / 100) * 20 + 10, 8, 0, 2 * Math.PI);
        ctx.fillStyle = prev.has(cell) ? 'steelblue' : 'lightsteelblue';
        ctx.fill();
    }

    prev = board;
    board = tick(board);
}


let board = new Set();
let prev = board;
for (let i = 0; i < Math.random() * 101 + 150; i++) {
    board.add(Math.floor(Math.random() * 30) * 100 + Math.floor(Math.random() * 30));
}

window.setInterval(draw, 200);
