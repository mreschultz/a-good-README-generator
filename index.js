const fs = require("fs");
const inquirer = require("inquirer");
const api = "./api";
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

// array of questions for user
const questions = [
	{
		type: "input",
		name: "github",
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
		choices: ["MIT", "None"],
	},
];

// function to write README file
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {}
inquirer.prompt(questions).then((answer) => {
	console.log(answer);
	writeToFile("README.md", generateMarkdown(answer));
});
// function call to initialize program
init();
