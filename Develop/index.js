const fs = require("fs");
const inquirer = require("inquire");
const api = "./api";
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
	{
		type: Input,
		name: github,
		message: "What's your GitHub name?",
	},
	{
		type: "input",
		name: "title",
		message: "What's your project's name?",
	},
	{
		type: "list",
		name: "license",
		message: "What kind of license do you use?",
		choices: ["MIT", "None"]
	},
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}
inquirer.prompt(questions).then((response) => {
	console.log(reponse);
});
// function call to initialize program
init();
