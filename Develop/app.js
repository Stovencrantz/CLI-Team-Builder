const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
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
            name: "name"
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
        .then(response => {
            console.log("This is our manager", response);
            let manager = new Manager(response.name, response.id, response.email, response.office);
            employees.push(manager); //push the new manager object to our araray holding all emmployee objects
            console.log("***success!***");
            getEmployees();
            })
};

//ask the user to input team members
//include an option for the user to finish selecting team members
function getEmployees() {
    inquirer
        .prompt([
            {   
                type: "list",
                message: "What kind of team member do you want to add?",
                choices: ["Engineer", "Intern", "My team is complete"],
                name: "employeeRole"
            }, {
                type: "input",
                message: "What is the employees name?",
                name: "name"
            }, {
                type: "input",
                message: "what is their employees ID number?",
                name: "id"
            }, {
                type: "input",
                message: "What is the employees email?",
                name: "email"
            }, {
                type: "input",
                message: "What is the engineers gitHub username?",
                name: "github",
                when: (userInput) => userInput.employeeRole === "Engineer"
            }, {
                type: "input",
                message: "What school is the intern from?",
                name: "school",
                when: (userInput) => userInput.employeeRole === "Intern"
            }, {
                type: "confirm",
                message: "Do you want to add to your team?",
                name: "newEmployee"
            }
        ])
        .then(function(response){
            if(response.employeeRole === "Engineer"){
                let engineer = new Engineer(response.name, response.id, response.email, response.github);
                console.log("This is our engineer: ", engineer);

                employees.push(engineer);
            }
            if(response.employeeRole === "Intern"){
                let intern = new Intern(response.name, response.id, response.email, response.school);
                console.log("This is our intern: ", intern);

                employees.push(intern);
            }
            if(response.newEmployee === true){
                getEmployees();
            }  
            else {

                console.log("our employees: ", employees);
                fs.appendFile("teamMembers.json", JSON.stringify(employees), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("***Success, the file was written!***");
                    
                })
                //=================================================
                //renderHTML
                //================================================
                console.log(render(employees));
                // render(employees);

                //if our output directory exists, write our file to it
                fs.exists(OUTPUT_DIR, (exists) => {
                    if (exists) {
                      console.error('OUTPUT_DIR already exists');
                      fs.writeFile(outputPath, render(employees), (err) => {
                          if (err) throw err;
                          console.log("the html has been written!");
                      })
                    }
                    //if our output directory does not exist, create it and write to it
                    else {
                        fs.mkdir("output", (err) => {
                            if (err) throw err;
                        });

                        fs.writeFile(outputPath, render(employees), (err) => {
                            if (err) throw err;
                            console.log("the html has been written!");
                        })    
                    }
            })
        }
    })
}

getManager();
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
