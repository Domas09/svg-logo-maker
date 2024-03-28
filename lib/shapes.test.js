const Shape = require('./shapes');

describe('Shapes', () => {
    describe('Text Length', () => {
        it('should throw an error when text length is greater than 3', ()=>{
            const shape = new Shape();
            expect(shape.setText('abcd')).toBe('Cannot be longer than 3 characters.');
        })
    });
});