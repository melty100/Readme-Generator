
// array of questions for user
const questions = [{
    type: "input",
    message: "Enter title of Readme",
    name: "title"
},
{
    type: "input",
    message: "Enter installation instructions",
    name: "instructions"
},
{
    type: "input",
    message: "Enter usage information",
    name: "usage"
},
{
    type: "input",
    message: "Enter contribution guidelines",
    name: "guidelines"
},
{
    type: "input",
    message: "Enter test instructions",
    name: "testInfo"
},
{
    type: "list",
    message: "Enter license",
    name: "license",
    choices: ['BSD', 'MIT', 'GPL']
},
{
    type: "input",
    message: "Enter github account",
    name: "github"
},
{
    type: "input",
    message: "Enter email address",
    name: "email"
}];

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const { resolve } = require("path");

const writeFileAsync = util.promisify(fs.writeFile);

// function to write README file
function writeToFile(fileName, data) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fileName, data, function(err, data){
            if(err){
                return reject(err);
            }
            resolve(data);
        });
    });
}

function buildReadmeText(userInput){


}
// function to initialize program
function init() {

    inquirer
    .prompt(questions)
    .then(answers => {
        console.log("In then clause    ");

        let readmeText = JSON.stringify(answers);

        writeFileAsync("README.md", readmeText)
        .then(function() {
            console.log("Success!");
        });
    })
    .catch(err => {

    });

}

// function call to initialize program
init();
