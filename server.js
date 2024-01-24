console.log('hello world');
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
// const { Connection } = require('mysql2/typings/mysql/lib/Connection');

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
                case"View all departments":
                viewAllDepartments();
                break;
            }
        })
    };

    questions();

app.listen(PORT, () => {
console.log(`Server runnning on http://localhost:${PORT}`);
});