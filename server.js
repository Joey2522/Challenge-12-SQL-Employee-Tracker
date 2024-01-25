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
    console.log('Connected to the employeeTracker_db database!');
    questions();
});

function questions() {
    inquirer
        .prompt ({
            type: 'list',
            name: 'selection',
            message: 'What would you like to do?',
            choices: [
                "View all departments.",
                "View all roles.",
                "View all employees.",
                "Add a department.",
                "Add a role.",
                "Add an employee.",
                "Update an employee role",
                "Exit",
            ],

        })
        .then((answer) => {
            switch (answer.selection) {
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
    }

    function viewAllDepartments() {
        const query = 'SELECT * FROM department';
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            questions();
        })
    };

    function viewAllRoles() {
        const query = 'SELECT * FROM roles';
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            questions();
        })
    };

    function viewAllEmployees() {
        const query = `
        SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
        FROM employee e
        LEFT JOIN roles r ON e.role_id = r.id
        LEFT JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id;
        `;
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            questions();
        })
    };

    function addDepartment() {
        inquirer
            .prompt ({
                type: 'input',
                name: 'new_department',
                message: 'What is the name of the department you would like to add?',
                default: '30 Characters or Less',
            })
        .then((answer) => {
            const query = `INSERT INTO department (department_name) VALUE ('${answer.new_department}')`;
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.log(`New department, ${answer.new_department}, added to the database!`);

                questions();
            })       
        }
    )};

    function addRole() {
        const query = 'SELECT * FROM department';
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);

        inquirer
            .prompt([
                {
                type: 'input',
                name: 'new_role',
                message: 'Enter the title of the new role:',
                default: 'Can be no more than 30 characters.',
                },
                {
                type: 'input',
                name: 'new_salary',
                message: 'Enter the salary of the new role:',
                default: 'Salary Example: 100000.00',
                },
                {
                type: 'list',
                name: 'department',
                message: 'Select the department ID for the new role:',
                choices: res.map(
                    (department) => department.id
                ),
                },
            ])
            .then((answers) => {
                // const department = res.find(
                //     (department) => department.name === answers.department
                // );
                const query = 'INSERT INTO roles SET ?';
                connection.query(
                    query,
                    {
                    title: answers.new_role,
                    salary: answers.new_salary,
                    department_id: answers.department,
                    },
                    (err, res) => {
                    if (err) throw err;
                    console.log(
                        `The role ${answers.new_role} was added to the database with a salary of ${answers.new_salary} to department ID ${answers.department}!`
                        );
                        questions();
                        }
                    );
                });
        });
    }
    


app.listen(PORT, () => {
console.log(`Server runnning on http://localhost:${PORT}`);
});