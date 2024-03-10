import inquirer from "inquirer";
import { Circle, Square, Triangle } from './lib/shapes'

// Promt for the user
inquirer.prompt({
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your SVG logo.',
        choises: ['Circle', 'Square', 'Triangle']
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
}).then(answers => {
    
})