const Shape = require('./shapes');

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