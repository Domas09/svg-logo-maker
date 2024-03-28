

class Shape{
    constructor(){
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
    render(){
        const rend = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
        return rend
    }
}

class Triangle extends Shape{
    constructor(){
        super();
    }
    render(){
        const rend = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150 10, 300 300, 0 300" fill="${this.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
        return rend
    }
}

class Square extends Shape{
    constructor(){
        super();
    }
    render(){
        const rend = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x="75" y="50" width="160" height="160" fill="${this.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
        return rend
    }
}

module.exports = {Shape, Circle, Triangle, Square};