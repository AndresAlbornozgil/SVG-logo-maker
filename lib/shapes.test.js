const Shapes = require('../lib/shapes');

// Tests circle
describe('Circle', () => {
    it('', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('');
    });
});

// Tests Square
describe('Square', () => {
    it('', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('');
    });
});

// Tests Triangle
describe('Triangle', () => {
    it('', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});
