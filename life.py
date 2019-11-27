import argparse

from draw import draw_loop
from patterns import patterns


def neighbours(cell):
    x, y = cell
    yield (x - 1), (y + 1)
    yield x, (y + 1)
    yield (x + 1), (y + 1)
    yield (x + 1), y
    yield (x + 1), (y - 1)
    yield x, (y - 1)
    yield (x - 1), (y - 1)
    yield (x - 1), y


def tick(board):
    new = set()
    calc = board | set(x for y in board for x in neighbours(y))

    for cell in calc:
        alive = sum(x in board for x in neighbours(cell))
        if alive == 3 or (cell in board and alive == 2):
            new.add(cell)

    return new


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("pattern", choices=patterns.keys(), help="pattern to produce")
    parser.add_argument(
        "-f",
        "--frequency",
        type=float,
        default=10,
        help="tick frequency in Hz",
        metavar="freq",
    )
    args = parser.parse_args()

    draw_loop(
        board=patterns[args.pattern]["seed"],
        board_size=patterns[args.pattern]["size"],
        freq=args.frequency,
        func=tick,
    )
