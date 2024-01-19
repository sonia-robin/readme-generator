const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'project',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
      },
      {
        type: 'list',
        name: 'licenses',
        message: 'What kind of licenses should your project have?',
        choices: ['MIT', 'Apache', 'GPL']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
      },
    ]);
  };

promptUser();

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
