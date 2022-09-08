// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 

// Link to the generate page
const generateMark = require('./utils/generateMarkdown');


// Prompt questions using inquirer
const questions = []

inquirer
.prompt([
  {
      type: 'input',
      name: 'title',
      message: 'What is the title for your project?',
      validate: dataEntered => {
          if (dataEntered) {
              return true;
          } else {
              console.log('Please enter the title for your project!');
              return false; 
          }
      }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining your project.',
    validate: dataEntered => {
        if (dataEntered) {
            return true;
        } else {
            console.log('Please enter a description!!');
            return false; 
        }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for how to use this app?',
    validate: dataEntered => {
        if (dataEntered) {
            return true;
        } else {
            console.log('Please provide instructions on how to use this app!');
            return false; 
        }
    }
  },
  {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
      validate: dataEntered => {
          if (dataEntered) {
              return true;
          } else {
              console.log('Please enter steps required to install your project!');
              return false; 
          }
      }
  },
  {
      type: 'input',
      name: 'credits', 
      message: 'List your collaborators, if any.',
      validate: dataEntered => {
        if (dataEntered) {
            return true;
        } else {
            console.log('Please provide collaborators, if none, please type N/S');
            return false; 
        }
    }
  },
  {
      type: 'input',
      name: 'contributions',
      message: 'How can a user contribute to this project?',
      validate: dataEntered => {
        if (dataEntered) {
            return true;
        } else {
            console.log('Please provide instructions for future contributors!');
            return false; 
        }
    }
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
])
.then((answers) => {
  const generatePage = generateMarkDown(answers);
}) 
fs.writeFile('README.md', data, err => {
      // Log if error
      if (err) {
          console.log(err);
          return;
      // Message if file was created successfully
      } else {
          console.log("Success!! Your README file has been created!")
      }
  });