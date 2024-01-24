const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employeeTracker_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the employeeTracker_db database!");
});

function questions() {
    inquirer
        .prompt ({
            type: 'list',
            name: 'question1',
            message: 'What would you like to do?',
            choices: [
                "View all departments.",
                "View all roles.",
                "View all emplyees.",
                "Add a department.",
                "Add a role.",
                "Add an employee.",
                "Update an employee role",
                "Exit",
            ],

        })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments.":
                    viewAllDepartments();
                    break;
                case "View all roles.":
                    viewAllRoles();
                    break;
                case "View all employees.":
                    viewAllEmployees();
                    break;
                case "Add a department.":
                    addDepartment();
                    break;
                case "Add a role.":
                    addRole();
                    break;
                case "Add an employee.":
                    addEmployee();
                    break;
                case "Update and employee role.":
                    updateEmployeeRole();
                    break;
                case "Exit":
                    connection.end();
                    console.log('Goodbye!')
                    break;
            }
        })
    };

    function viewAllDepartments() {
        const query = "SELECT * FROM department";
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            questions();
        })
    };

    function viewAllRoles() {
        const query = "SELECT title FROM roles";
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            // questions();
        })
    };

    

    questions();


app.listen(PORT, () => {
console.log(`Server runnning on http://localhost:${PORT}`);
});