# Challenge-12-SQL-Employee-Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description:
Employee Tracker is a SQL database tracker that allows non-developers, business owners or managers to easity view and interact with employee information through the command-line of the application stored in an SQL employee trackers database. 

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Installation Process](#Installation-Process)
- [Usage Information](#Usage-Information)
- [Repository URL](#Repository-URL)
- [Demonstration Video](#YouTube-Walkthrough-Video)
- [Screenshots](#Screenshots)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [License](#License)
- [Author](#Author)

# Overview

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## The Challenge:
Build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. In addition, create a walkthrough video that demonstrates its functionality.


## Installation Process
1. Clone the repository: [Challenge-12-Employee-Tracker](https://github.com/Joey2522/Challenge-12-SQL-Employee-Tracker)
2. Using your terminal install the following: 
- Node.JS [Version 20.10.0](https://nodejs.org/en/blog/release/v20.10.0)
- MySQL2 [Version 3.9.0 for macos14.0 on arm64](https://www.npmjs.com/package/mysql2)
- Inquirer.js: [Version 8.2.6](https://www.npmjs.com/package/inquirer/v/8.2.6)
3. Open the cloned repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided above to ensure the cloned documentation will operate properly.

## Usage Instructions
1. Open the cloned repository in any source code editor.
2. Open your editors integrated terminal.
3. Enter “node server.js” in the command-line.
4. The user will be presented with a set of choices within the command-line interface.The user will then use the 'UP' and 'DOWN' arrow keys to navigate the command-line and make the desired selection.
5. Continue to use the command-line until your task is complete.
6. For detailed walkthrough see YouTube video walkthrough link below.

## Repository URL:
[Repository URL Link:](https://github.com/Joey2522/Challenge-12-SQL-Employee-Tracker)

## YouTube Walkthrough Video:
[Click Here to Watch](https://youtu.be/yiZEIMX5REE)

## Screenshots:
### Figure 1. Command line application
![](./assets/Screenshot%202024-01-27%20at%208.18.31 AM.png) 
### Figure 2. Command line application
![](./assets/Screenshot%202024-01-27%20at%208.19.02 AM.png)
### Figure 3. Command line application
![](./assets/Screenshot%202024-01-27%20at%208.19.20 AM.png)


## Built With
- Dynamic JavaScript
- Node.JS [Version 20.10.0](https://nodejs.org/en/blog/release/v20.10.0)
- MySQL2 [Version 3.9.0 for macos14.0 on arm64](https://www.npmjs.com/package/mysql2)
- Inquirer.js: [Version 8.2.6](https://www.npmjs.com/package/inquirer/v/8.2.6)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned
- How to build a command-line application from scratch to manage an employee database, using Node.js, Inquirer, and MySQL.

## License & Copyright ©
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

### Copyright © 2024 Joseph Porter
```md
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

  
## Author

Follow me on Github at [Joey2522](https://github.com/Joey2522)! 


© 2024 [Joey2522](https://github.com/Joey2522). Confidential and Proprietary. All Rights Reserved.