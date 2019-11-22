import os
import time

__all__ = ["draw_loop"]


def _clear():
    os.system("cls" if os.name == "nt" else "clear")
    return None


def _draw(board, size, style="□"):
    length, height = size
    s = "┌" + "─" * length + "┐\n"
    for y in range(height):
        s += "│"
        for x in range(length):
            s += style if (x, y) in board else " "
        s += "│\n"

    print(s + "└" + "─" * length + "┘")
    return None


def _in_board(cell, size):
    x, y = cell
    a, b = size
    return (0 <= x < a) and (0 <= y < b)


def draw_loop(board, board_size, freq, func, cell_style="□"):
    while any(_in_board(cell, board_size) for cell in board):
        _clear()
        _draw(board, board_size)

        time.sleep(1 / freq)

        board = func(board)

    _clear()
    return None
