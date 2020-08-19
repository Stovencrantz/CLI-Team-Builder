const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeesArr = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//ask the user for info about the team manager
 function getManager () {
     //the prompt section of this function returns info about our future manager variable and stores it as an object
     inquirer
        .prompt([
            {
            type: "input",
            message: "Who would you like to make the manager of this team?",
            name: "manager"
            },  {
                type: "input",
                message: "What is the managers id number?",
                name: "id"
            },  {
                type: "input",
                message: "What is the managers email?",
                name: "email"
            }, {
                type: "input",
                message: "What is the managers office number",
                name: "office"
            }
        ])
        //once the user asks all our questions, then we store our object into
        //our employee array
        //and create a new Manager object with the parameters of the object in our 'response'
        .then(function(response) {
            console.log("This is our manager", response);
            employeesArr.push(JSON.stringify(response)); //push the new manager object to our araray holding all emmployee objects
            manager = new Manager(response.manager, response.id, response.email, response.office);
            console.log("***success!***");
            employeePoll();
            })
};

function employeePoll() {
    inquirer 
    .prompt([
        {
            type: "list",
            message: "What kind of team member do you want to add?",
            choices: ["Engineer", "Intern", "My team is complete"],
            name: "userChoice"
        }
    ])
    .then(function(response){
        console.log("userCoice: ", response.userChoice)
    })
}

getManager();
//ask the user to input team members
//include an option for the user to finish selecting team members

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
