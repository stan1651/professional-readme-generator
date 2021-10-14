// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
// use the inquirer.js npm package
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your github username?",
    },
    {
        type: 'input',
        name: 'description',
        message: "What's your project desciption?",
    },
     {
         type: 'input',
         name: 'installation',
         message: "What are your projects installation instructions?",
     },
     {
         type: 'input',
         name: 'usage',
         message: "What is your projects usage information?",
      },
     {
         type: 'input',
         name: 'contributors',
         message: "Any contributors to cite?",
     },
     {
         type: 'input',
         name: 'tests',
         message: "Any tests to be run?",
     },
     {
         type: 'list',
         name: 'licenses',
         message: "Which license would you like to apply?",
         choices: ['General Public License 2.0','General Public License 3.0','MIT']
     },

];
//function createBadge(answers) {
    // List choices to the user with inquirer
    //const gpl3 =
      //"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    //const mit =
      //"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      //"[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      //let badge;
      //if (answers.badge === "MIT") {
        //badge = mit;
      //} else if (answers.badge === "GPL v3") {
        //badge = gpl3;
      //} else if (answers.badge === "GPL v2") {
        //badge = "";
      //}
      //return badge;
  //}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('NewReadme.md', generateMarkdown({ ...responses})
        )});
}

// Function call to initialize app
init();
