// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![${license} license](https://img.shields.io/badge/license-${license}-Red.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return license !== 'None' ? `* [${license}](license)` : ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return (
            ` # License
      The license for this project is ${license}
      `
        )
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contenets

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](questions)

## Installation
  ${data.install}

  ## Usage
    ${data.usage}

${renderLicenseSection(data.license)} 
${renderLicenseLink(data.license)} 

## Contributing
${data.contribution}

## Tests
  ${data.test}

  ## Questions

  If you have any questions about this file please feel free to contact me at ${data.email}.
  If you are interested in more of my work please go to my github page, my username is ${data.github_username}.


  
`;

}



module.exports = generateMarkdown;