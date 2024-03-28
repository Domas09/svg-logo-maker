const {Shape, Circle, Triangle, Square} = require('./shapes');


describe('Shapes', () => {
    describe('Text Length', () => {
        it('should throw an error when text length is greater than 3', ()=>{
            const shape = new Shape();
            expect(shape.setText('abcd')).toBe('Cannot be longer than 3 characters.');
        })
    });
    describe('Assign Functions', ()=>{
        it('should assign text properly', ()=>{
            const shape = new Shape();
            shape.setText('abd');
            expect(shape.text).toBe('abd');
        })
        it('should assign text color properly', ()=>{
            const shape = new Shape();
            shape.setColor('blue');
            expect(shape.textColor).toBe('blue');
        })
        it('should assign shape color properly', ()=>{
            const shape = new Shape();
            shape.setShapeColor('red');
            expect(shape.shapeColor).toBe('red');
        })
    })
});

describe('Circle', () => {
    describe('Text Length', () => {
        it('should throw an error when text length is greater than 3', ()=>{
            const circle = new Circle();
            expect(circle.setText('abcd')).toBe('Cannot be longer than 3 characters.');
        })
    });
    describe('Assign Functions', () => {
        it('should assign text properly', ()=>{
            const circle = new Circle();
            circle.setText('abc');
            expect(circle.text).toBe('abc');
        })
        it('should assign text color properly', ()=>{
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.textColor).toBe('blue');
        })
        it('should assign shape color properly', ()=>{
            const circle = new Circle();
            circle.setShapeColor('red');
            expect(circle.shapeColor).toBe('red');
        })
    })
    describe('Render Function', () => {
        it('should return all properties properly formatted for svg file', ()=> {
            const circle = new Circle();
            circle.setShapeColor('blue');
            circle.setText('drg');
            circle.setColor('red');
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="blue" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">drg</text>

</svg>`);
        })
    })
})

describe('Triangle', () => {
    describe('Text Length', () => {
        it('should throw an error when text length is greater than 3', ()=>{
            const triangle = new Triangle();
            expect(triangle.setText('abcd')).toBe('Cannot be longer than 3 characters.');
        })
    });
    describe('Assign Functions', () => {
        it('should assign text properly', ()=>{
            const triangle = new Triangle();
            triangle.setText('abc');
            expect(triangle.text).toBe('abc');
        })
        it('should assign text color properly', ()=>{
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.textColor).toBe('blue');
        })
        it('should assign shape color properly', ()=>{
            const triangle = new Triangle();
            triangle.setShapeColor('red');
            expect(triangle.shapeColor).toBe('red');
        })
    })
    describe('Render Function', () => {
        it('should return all properties properly formatted for svg file', ()=> {
            const triangle= new Triangle();
            triangle.setShapeColor('blue');
            triangle.setText('drg');
            triangle.setColor('red');
            expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150 10, 300 300, 0 300" fill="blue" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">drg</text>

</svg>`);
        })
    })
})

describe('Square', () => {
    describe('Text Length', () => {
        it('should throw an error when text length is greater than 3', ()=>{
            const square = new Square();
            expect(square.setText('abcd')).toBe('Cannot be longer than 3 characters.');
        })
    });
    describe('Assign Functions', () => {
        it('should assign text properly', ()=>{
            const square = new Square();
            square.setText('abc');
            expect(square.text).toBe('abc');
        })
        it('should assign text color properly', ()=>{
            const square = new Square();
            square.setColor('blue');
            expect(square.textColor).toBe('blue');
        })
        it('should assign shape color properly', ()=>{
            const square = new Square();
            square.setShapeColor('red');
            expect(square.shapeColor).toBe('red');
        })
    })
    describe('Render Function', () => {
        it('should return all properties properly formatted for svg file', ()=> {
            const square= new Square();
            square.setShapeColor('blue');
            square.setText('drg');
            square.setColor('red');
            expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x="75" y="50" width="160" height="160" fill="blue" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">drg</text>

</svg>`);
        })
    })
})