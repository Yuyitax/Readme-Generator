// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license ? `![Badge](https://img.shields.io/badge/License-${license}-blue)` : '');

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license ? `[License: ${license}](https://choosealicense.com/licenses/${license}/)` : '')

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const resource_lookup = {
    'Apache License 2.0': 'apache-2.0', 
    'MIT License': 'mit',
    'GNU AGPLv3': 'agpl-3.0', 
    'GNU GPLv3': 'gpl-3.0', 
    'GNU LGPLv3': 'lgpl-3.0', 
    'Mozilla Public License 2.0': 'mpl-2.0', 
    'Boost Software License 1.0': 'bsl-1.0', 
    'The Unlicense': 'unlicense',
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
-[Description](#description)  
-[Installation](#installation)
-[Credits](#credits)
-[Contributions](#contributions)  
-[Questions](#questions)
-[Rights](#rights) 

  ## Description
   ${data.description}
  ## "Installation
   ${data.installation}
  ## Contributions
   ${data.contributions}
  ## Credits
   ${data.credits}
  ## Questions?
  If you have any questions, please [send a DM to my GitHub] ${data.username}

  ## Rights 
  © 2022 ${data.name}. All Rights Reserved.
`;
}

module.exports = generateMarkdown;

