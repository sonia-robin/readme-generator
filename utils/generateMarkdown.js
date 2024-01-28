// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = '';
  if(data.licenses === 'MIT'){
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if(data.licenses === 'Apache'){
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if(data.licenses === 'GPLv3'){
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if(data.licenses === 'GPLv2'){
    licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
  return `# ${data.title}
${licenseBadge}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribution](#contribution)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## Contribution
${data.contribution}
## Tests
${data.test}
## Questions
${data.GitHub}, ${data.GitHubUrl}

If you have any questions or need further assistance, feel free to reach out via email bellow:

${data.email}
`;
}

module.exports = generateMarkdown;
