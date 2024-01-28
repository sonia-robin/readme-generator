const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub user name?',
  },
  {
    type: 'input',
    name: 'GitHubUrl',
    message: 'What is your GitHub URL?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
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
    choices: ['MIT', 'Apache', 'GPLv3', 'GPLv2']
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
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence. Include links to tutorials',
  },
];

// Function to prompt user to answer questions
const promptUser = () => {
  return inquirer.prompt(questions);
};

promptUser()
.then((data) => writeFileAsync('README.md', generateMarkdown(data)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));
