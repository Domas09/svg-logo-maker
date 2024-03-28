const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Characters for svg(must be less than 3 characters)'
        },
        {
            type: 'list',
            name: 'type',
            message: 'Choose a shape',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Choose a color for the text',
            choices: ['white', 'black', 'blue', 'red', 'orange', 'green', 'purple', 'pink', 'grey', 'yellow']
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Choose a color for the shape',
            choices: ['white', 'black', 'blue', 'red', 'orange', 'green', 'purple', 'pink', 'grey', 'yellow']
        }
    ])
    .then((data) =>{
        const {text, type, textColor, shapeColor} = data;
        let svg = '';
        if(type === 'Circle'){
            const circle = new Circle;
            circle.setColor(textColor);
            circle.setText(text);
            circle.setShapeColor(shapeColor);
            svg = circle.render();
        } 
        fs.writeFile('./examples/circle.svg', svg, (err) => 
            err ? console.log(err) : console.log('Success!')
        )
    })
    