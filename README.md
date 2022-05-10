# THE EMPLOYEE MANAGER #

# Description
This project emphasizes the use of using MySql with Inquirer, Node Js, console.table and several npm and json packages to render an application to track employee details.

# Features
This project has script features of:
- Variable declaration area with required entry points
- Inquirer Prompts
- Switch Statement with several cases
- Functions for populating tables

DATABASE SCHEMA

TDesign the following database schema containing three tables:
department
id - INT PRIMARY KEY
name - VARCHAR(30) to hold department name
role:
id - INT PRIMARY KEY
title - VARCHAR(30) to hold role title
salary - DECIMAL to hold role salary
department_id - INT to hold reference to department role belongs to
employee:
id - INT PRIMARY KEY
first_name - VARCHAR(30) to hold employee first name
last_name - VARCHAR(30) to hold employee last name
role_id - INT to hold reference to role employee has
manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
Build a command-line application that at a minimum allows the user to:
Add departments, roles, employees
View departments, roles, employees
Update employee roles

## Installation
Git clone the repository into your terminal. The application should use Jest for running the unit tests and Inquirer from npm for collecting input from the user. The following command line when invoked will run the application: node index.js
To Execute File:
Open in browser

## Screenshot
![alt text](https://github.com/hergemony/?raw=true)

![alt text](https://github.com/hergemony/?raw=true)

## Video
[![CLICK TO VIEW WALKTHROUGH VIDEO](https://img.youtube.com/xx)](https://youtu.be/)

## License
![License](https://img.shields.io/badge/License-MIT-blue)

## GitHub Features
- One JS Page:
Server.js. This provides the logic for the client side of the app, in this case, it used the backend through Node JS.
- One JSON package:
Node Modules Folder
DB folder with two SQL files
Contains a .SQL files for the Employee database and the Seed file with database values
Package.JSON
- JSON and NPM packages and dependencies
- Code Validation
* These use W3C Code Validators for HTML, CSS and Javascript
    * Format: ![Validator-HTML](N/A)
    * Format: ![Validator-CSS](N/A)
    * Format: ![Validator-JS](N/A)

## Credits
https://stackoverflow.com
https://w3schools.com
https://github.com/sam-ngu
https://www.nathan-lam.com/blog/embed-video-in-github-readme.html

## Questions
Any questions please email hergemony@gmail.com

## Github Deployed Link
https://hergemony.github.io/theemployeemanager/

## Copyright
2022 Hergemony™️ Digital Services

