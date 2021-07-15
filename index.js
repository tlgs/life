/**
 * @file Conway's Game of Life engine and `canvas` manipulation.
 *
 * JavaScript does not have a built-in tuple data structure - this would be the
 * ideal way to represent a cell. Instead, a single integer is used: x + 100 * y.
 * This inherently restricts the board size.
 *
 * The focus of this file (and project) is on the Game of Life logic
 * and not on the graphical component;
 * as such, features such as refresh rate and cell colors are hard-coded.
 */

let board = new Set();
let prev = board;
for (let i = 0; i < 1200; i += 1) {
  board.add(Math.floor(Math.random() * 60) * 100 + Math.floor(Math.random() * 60));
}

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

function tick(b) {
  const calc = new Set(b);
  for (const cell of b) {
    for (const neighbor of neighbors(cell)) {
      calc.add(neighbor);
    }
  }

  const nb = new Set();
  for (const cell of calc) {
    const alive = [...neighbors(cell)].reduce((acc, x) => acc + b.has(x), 0);
    if (alive === 3 || (b.has(cell) && alive === 2)) {
      nb.add(cell);
    }
  }

  return nb;
}

/**
 * Handle all of the DOM manipulation logic to reflect the board's state.
 * It is the function that is repeatedly called by `window.setInterval()`.
 */
function draw() {
  const ctx = document.getElementById('grid').getContext('2d');

  ctx.clearRect(0, 0, 600, 600);

  // draw grid
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)';
  for (let i = 0; i < 61; i += 1) {
    ctx.beginPath();
    ctx.moveTo(0, i * 10);
    ctx.lineTo(600, i * 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(i * 10, 0);
    ctx.lineTo(i * 10, 600);
    ctx.stroke();
  }

  for (const cell of board) {
    ctx.beginPath();
    ctx.arc((cell % 100) * 10 + 5, Math.floor(cell / 100) * 10 + 5, 4, 0, 2 * Math.PI);
    ctx.fillStyle = prev.has(cell) ? 'steelblue' : 'lightsteelblue';
    ctx.fill();
  }

  prev = board;
  board = tick(board);
}

window.setInterval(draw, 100);
