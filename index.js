// Includes packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const shapes = require("./lib/shapes");

// Creates an array of questions for user input
const questions = [
    {
        type: "",
        name: "",
        message: ""
    },
  ];

// Creates a function to write README file
function writeToFile(fileName, data) {
console.info('data:', data);
return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// Creates a function to initialize app
function init() { 
inquirer
  .prompt(questions)
  .then(answers => {
    console.log("Generating")
    writeToFile("File Name", shapes({...answers})
 ) });
}

// Function call to initialize app
init();
