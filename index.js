const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Create array of questions to ask
const questions = [
  // Text
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters',
    // Set limit of three characters
    validate: (text) => {
      if (text.length <= 3) {
        return true
      } else {
        return 'Please enter up to three characters'
      }
    }
  },

  // Text Color
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color of text'
  },

  // Shape
  {
    type: 'list',
    name: 'shape',
    message: 'Pick a shape',
    choices: ['triangle', 'circle', 'square']
  },

  // Shape Color
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color of shape'
  },

];

// Prompt user with questions
inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    // Make the shape
    let shape;

    if(answers.shape === 'circle') {
      shape = new Circle()
    }

    if(answers.shape === 'square') {
      shape  = new Square()
    }

    if(answers.shape === 'triangle') {
      shape = new Triangle()
    }

    shape.setColor(answers.shapeColor)

    // Make SVG
    const svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`

    
    // Save SVG to a file
    fs.writeFile('SVG-Generator.svg', svgFile, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

  })
