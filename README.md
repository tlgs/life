# Conway's Game of Life

[![Python version: 3.7](https://img.shields.io/badge/Python-3.7-blue.svg)](https://www.python.org/downloads/release/python-374/)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/python/black)

Inspired by
[Jack Diederich's 2012 PyCon talk](https://www.youtube.com/watch?v=o9pEzgHorH0).

## Patterns

| name                | type       |
|---------------------|------------|
| block               | Still life |
| beacon              | Oscillator |
| blinker             | Oscillator |
| Kok's galaxy        | Oscillator |
| toad                | Oscillator |
| glider              | Spaceship  |
| Gosper's glider gun | Gun        |

## Example usage

```console
$ python life.py --help
usage: life.py [-h] [-f freq]
               {block,beacon,blinker,Kok's galaxy,toad,glider,Gosper's glider
               gun}

positional arguments:
  {block,beacon,blinker,Kok's galaxy,toad,glider,Gosper's glider gun}
                        pattern to produce

optional arguments:
  -h, --help            show this help message and exit
  -f freq, --frequency freq
                        tick frequency in Hz

$ python life.py glider
...
```
