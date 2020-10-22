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
	{
		type: "input",
		name: "description",
		message: "What is the description of your app?",
	},
	{
		type: "input",
		name: "table",
		message: "What is the table of contents?",
	},
	{
		type: "input",
		name: "installation",
		message: "How do you install your app?",
	},
	{
		type: "input",
		name: "usage",
		message: "How do you use your app?",
	},
	{
		type: "input",
		name: "contributing",
		message: "Who contributed to your app?",
	},
	{
		type: "input",
		name: "tests",
		message: "What quality assurance tests did you run?",
	},
	{
		type: "input",
		name: "questions",
		message: "How do we contact you with questions?",
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
