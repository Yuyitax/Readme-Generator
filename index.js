// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 

// Link to the generate page
const generateMark = require('./utils/generateMarkdown');



// Prompt questions using inquirer
const questions = () => {
  return inquirer.prompt([
  {
      type: 'input',
      name: 'title',
      message: 'What is the title for your project?',
      validate: dataEntered => {
          if (dataEntered) {
              return true;
          } else {
              console.log('Please enter the title for your project!!');
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
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'GNU'],
      default: ["MIT"],
      validate: dataEntered => {
          if (dataEntered) {
              return true;
          } else {
              console.log('Please choose a license!');
              return false; 
          }
      }
  },
  {
      type: 'input',
      name: 'install',
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
      name: 'usage',
      message: 'How do you use this app?',
      validate: dataEntered => {
          if (dataEntered) {
              return true;
          } else {
              console.log('Please enter a usage description!');
              return false; 
          }
      }
  },
  {
      type: 'input',
      name: 'test', 
      message: 'What command should be run to run tests?',
      default: 'npm test'
  },
  {
      type: 'input',
      name: 'contributors',
      message: 'What does the user need to know about contributing to the repo?'
  }
]);
};


// Function to log errors or log final file
const writeFile = data => {
  fs.writeFile('README.md', data, err => {
      // Log if err
      if (err) {
          console.log(err);
          return;
      // Message if file was created successfully
      } else {
          console.log("Success!! Your README file has been created!")
      }
  })
}; 



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init()
// getting user answers 
.then(userAnswers => {
  return generatePage(userAnswers);
})
// using data to display on page 
.then(data => {
  return writeFile(data);
})
// catching errors 
.catch(err => {
  console.log(err)
}) 