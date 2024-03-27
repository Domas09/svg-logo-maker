const Shape = require('./shapes');

describe('Shapes', () => {
    describe('Text Length', () => {
        it('should throw an error when text length is greater than 3', ()=>{
            const text = () => new Shape('abcd');
            const err = new Error('Too many characters');
            expect(text).toThrow(err);
        })
    });
});