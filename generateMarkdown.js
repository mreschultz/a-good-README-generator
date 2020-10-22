// function to generate markdown for README
function generateMarkdown(data) {
	return ` # ${data.title} 
 ## ${data.description}

 ## ${data.table}

 ## ${data.installation}

 ## ${data.usage}

 ## ${data.contributing}

 ## ${data.tests}

 ## ${data.questions}

 ## ${data.github}

 ## ${data.license}
	
`;
}

module.exports = generateMarkdown;
