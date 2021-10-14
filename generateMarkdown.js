// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Professional Readme Generator

## Description 
command line interface application (CLI)
THAT ALLOWS THE USER TO GENERATE A MARKDOWN README FILE USING THE INQUIRER PACKAGE 
THE APPLICATION ALSO USES NODE
NODE ALLOWS FOR SERVER SIDE APPLICATION THAT ALLOWS THE USAGE OF JAVASCRIPT WITHOUT THE BROWSER. 

I also learned how to initialize node modules and dependencies as well as use multiple libraries for a given application.


## Table of Contents
*[Description](#description)
*[installation](#installation)
*[usage](#usage)
*[contributors](#contributors)
*[tests](#tests)
*[license](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## contributors
${answers.contributors}

## Tests
${answers.tests}

## License
${answers.license}
  
  
`;
}

module.exports = generateMarkdown;
