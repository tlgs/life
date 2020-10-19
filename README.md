# Conway's Game of Life

Inspired by
[Jack Diederich's 2012 PyCon talk](https://www.youtube.com/watch?v=o9pEzgHorH0).

This is a refactor of a previous Python solution
using vanilla JavaScript and the HTML `<canvas>` API.

## Notes

- The initial configuration is random.
- Simulation frequency is set at 5Hz.
- The underlying solution represents a cell's coordinates as a single integer;
this imposes a limit on the range of usable values.

## Resources

- [Conway's Game of Life (Wikipedia)](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)
- [Canvas API (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
