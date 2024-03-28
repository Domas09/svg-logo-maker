

class Shape{
    constructor(){
        this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
        this.text = '';
        this.textColor = '';
        this.shapeColor = '';
    }
    setText(text){
        if(text.length > 3){
            return 'Cannot be longer than 3 characters.'
        } else {
            this.text = text;
        }
    }
    setColor(textColor){
        this.textColor = textColor;
    }
    setShapeColor(shapeColor){
        this.shapeColor = shapeColor
    }

}

class Circle extends Shape{
    constructor(){
        super();
    }
}

class Triangle extends Shape{
    constructor(){

    }
}

class Square extends Shape{
    constructor(){

    }
}

module.exports = Shape;