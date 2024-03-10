import inquirer from "inquirer";
import { Circle, Square, Triangle } from './lib/shapes.js'
import { writeFileSync } from 'fs';

// Promt for the user
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your SVG logo.',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a color for your shape. (Enter a color name or hex code)'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the SVG text:',
        validate: input => input.length <= 3 || 'Text must be up to three characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Choose a color for your text. (Enter a color name or hex code)'
    }
]).then(answers => {
    const { shape, shapeColor, text, textColor } = answers;
    let svgShape;

    switch(shape) {
        case 'Circle':
            svgShape = new Circle(shapeColor);
                break;
        case 'Square':
            svgShape = new Square(shapeColor);
                break;
        case 'Triangle':
            svgShape = new Triangle(shapeColor);
                break;
        }
    
    // Generate the SVG content combining the user-selected shape and text and colors
    const svgContent = 
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${svgShape.render()}
        
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

    // Save SVG to output folder
    writeFileSync('./output/logo.svg', svgContent);
    console.log('Generated logo.svg');
})