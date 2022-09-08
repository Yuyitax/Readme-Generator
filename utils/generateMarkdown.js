
// Generated MarkDown for README
function generateMarkdown({ title, usage, gredits, contributions, rights, name, username }) {
  return `
  # Title 
  ${data.title}

  ## Table of Contents
-[Description](#description)  
-[Usage](#usage)
-[Credits](#credits)
-[Contributions](#contributions)  
-[Rights](#rights) 

  ## Description
   ${data.description}
  ## Usage
   ${data.usage}
  ## Credits
   ${data.credits}
  ## Contributions
   ${data.usage}
  ## Rights 
  © 2022 ${data.name} -- ${data.username}. All Rights Reserved.
`;
}

module.exports = generateMarkdown;
