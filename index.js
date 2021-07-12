// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input

const questions = [{
        type: "input",
        message: "What is your email?",
        name: "email",
    },

    {
        type: "input",
        message: "What is your github username?",
        name: "github_username",
    },

    {
        type: "input",
        message: "What is the title of your README Project?",
        name: "title",
    },

    {
        type: "input",
        message: "What is the description of your Project?",
        name: "description",
    },

    {
        type: `list`,
        message: `What license do you want to use?`,
        name: "license",
        choices: ["MIT", "Apache 2.0", "IBM", "GitHub", "None"],
    },

    {
        type: "input",
        message: "How do you install your Project?",
        name: "install",
    },

    {
        type: "input",
        message: "What is the proper use of this Project?",
        name: "usage",
    },

    {
        type: "input",
        message: "How do you contribute to this Project?",
        name: "contribution",
    },

    {
        type: "input",
        message: "What test were perfomed on this Project?",
        name: "test",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const data = generateMarkdown(answers);
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Pass")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const fileName = path.join(__dirname, "README.md");
        writeToFile(fileName, answers);
    });
}

// Function call to initialize app
init();