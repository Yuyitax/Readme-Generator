// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 

// Link to the generate page
const generateMarkdown = require('./utils/generateMarkdown');



// Prompt questions using inquirer
// const generateReadMe = ({ title, usage, gredits, contributions, rights, name, username }) =>

const questions = 
[
  {
      type: 'input',
      name: 'title',
      message: 'What is the title for your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for how to use this app?',
  },
  {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
  },
  {
      type: 'input',
      name: 'credits', 
      message: 'List your collaborators, if any.',
  },
  {
      type: 'input',
      name: 'contributions',
      message: 'How can a user contribute to this project?',
  },
  {
    type: 'input',
    name: 'name', 
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'username', 
    message: 'What is your GitHub username?',
  },
]

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log("Unable to generate REAME.md file") : console.log(`Success!! Your README file has been created!`));
}

function init() {
  fileName = 'README.md'
  inquirer.prompt(questions).then(answers => generateMarkdown(answers)).then(data => writeToFile(fileName, data))    
}

// Function call to initialize app
init();

