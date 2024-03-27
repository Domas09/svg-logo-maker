

class Shape{
    constructor(text, textColor, shapeColor){
        if(text.length > 3){
            throw new Error('Too many characters');
        }
        this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle{
    constructor(){

    }
}

class Triangle{
    constructor(){

    }
}

class Square{
    constructor(){

    }
}

module.exports = Shape;