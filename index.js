const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const genTeam = require('./src/page-template');

teamMemberArray = [];

// question array for employee role

const roleQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern', 'No more team members to add']
        }
    ]).then(function (userInput) {
        switch(userInput.addEmployee) {
            case 'Manager':
                manQuestions();
                break;
            case 'Engineer':
                engQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                generatePage();
        }
    })
};


// question array for manager o

const manQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            // validate prompt
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name");
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            // validate prompt
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            // validate prompt
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            // validate prompt
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMemberArray.push(manager);
        roleQuestions();
    });
};


// question array for engineer 

const engQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            // validate prompt
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
            // validate prompt
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's ID");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            // validate prompt
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the engineer's GitHub username",
            // validate prompt
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        teamMemberArray.push(engineer);
        roleQuestions();
    });
};


// question array for intern 

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            // validate prompt
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name");
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            // validate prompt
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's ID");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            // validate prompt
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            // validate prompt
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMemberArray.push(intern);
        roleQuestions();
    });
};

const generatePage = () => {
    console.log('Team profile created!');

    fs.writeFileSync('./dist/team.html', genTeam(teamMemberArray));
};

roleQuestions();