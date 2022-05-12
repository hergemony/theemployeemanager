// Create main server.js page which will run the backend of the employee manager using mysql
const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
var mysql = require("mysql");
const util = require("util");

//PLAN
// Application allows users to update employee managers.
// Application allows users to view employees by manager
// Application allows users to view employees by department
// Application allows users to delete departments, roles, and employees
// Application allows users to view the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

// Place for logo to appear in backend as user opens file
const logo = require("");
const config = require("./package.json");
console.log(logo(config).render());

// Create connection to mysql
const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: "password",
  database: "employeetracker",
});

// Create connection to catch errors and display status/error messages
connection.connect((err) => {
  if (err) {
    console.log(err);
    res.status(500);
    return res.send("There was an error connecting to the datatabase.");
  }
  console.log("You're connected!");

  // Function for inquirer to prompt data
  runSearch();
});

connection.query = util.promisify(connection.query);

// include function for inquirer to prompt data entered by user
// USE CRUD (Create, Read, Update, Delete)
function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employess by manager",
        "Add employee",
        "Add department",
        "Add role",
        "Remove employee",
        "Update employee role",
        "Update employee manager",
      ],
      // Add Promise
    })
    .then((answers) => {
      // Start switch statement
      switch (answers.action) {
        // Start new case
        case "View all employees":
          byEmployees();
          runSearch();

          break;

        // Start new case
        case "View all employees by department":
             byDepartment();
             runSearch();

             break;

        case "View all employees by manager":
            byManager();
            runSearch();

            break;

        // Start new case
        // Take in further input from user
        case "Add employee":
            inquirer
            .prompt([
                {
                    name: "employeeFirst",
                    type: "input",
                    message: "What is the employee's first name?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                },
            ])


      }
    });
}
