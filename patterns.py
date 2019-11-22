__all__ = ["patterns"]

patterns = {
    "glider": {
        "seed": {(1, 0), (2, 1), (0, 2), (1, 2), (2, 2)},
        "size": (40, 20),
        "type": "Spaceship",
    },
    "block": {
        "seed": {(1, 1), (1, 2), (2, 1), (2, 2)},
        "size": (4, 4),
        "type": "Still life",
    },
    "blinker": {"seed": {(2, 1), (2, 2), (2, 3)}, "size": (5, 5), "type": "Oscillator"},
    "toad": {
        "seed": {(2, 2), (2, 3), (2, 4), (3, 1), (3, 2), (3, 3)},
        "size": (6, 6),
        "type": "Oscillator",
    },
    "beacon": {
        "seed": {(1, 1), (1, 2), (2, 1), (4, 4), (3, 4), (4, 3)},
        "size": (6, 6),
        "type": "Oscillator",
    },
    "Kok's galaxy": {
        "seed": {
            *((x, y) for x in range(3, 9) for y in range(3, 5)),
            *((x, y) for x in range(10, 12) for y in range(3, 9)),
            *((x, y) for x in range(3, 5) for y in range(6, 12)),
            *((x, y) for x in range(6, 12) for y in range(10, 12)),
        },
        "size": (15, 15),
        "type": "Oscillator",
    },
}
