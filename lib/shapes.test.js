const { Circle, Square, Triangle } = require('./shapes');

describe('Circle class', () => {
  it('should render an SVG circle element with the correct color', () => {
    const circle = new Circle('blue');
    const svgString = circle.render();
    expect(svgString).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
  });
});

describe('Square class', () => {
  it('should render an SVG square element with the correct color', () => {
    const square = new Square('green');
    const svgString = square.render();
    expect(svgString).toEqual('<rect x="50" y="0" width="200" height="200" fill="green" />');
  });
});

describe('Triangle class', () => {
  it('should render an SVG triangle element with the correct color', () => {
    const triangle = new Triangle('#fff');
    const svgString = triangle.render();
    expect(svgString).toEqual('<polygon points="150,10 290,190 10,190" fill="#fff" />');
  });
});
