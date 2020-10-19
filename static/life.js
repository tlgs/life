// cell = 100 * y + x
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
