const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const OUTPUT_DIR = path.resolve(__dirname, 'docs');
const outputFileName = path.join(OUTPUT_DIR, 'index.html');

const render = require('./src/page-template.js');

const teamMembers = [];


const init = () => {

  const createTeam = () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'teamMemberChoice',
        message: 'Which type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          'I do not want to add anymore team members'
        ]
      }
    ])
      .then(userChoice => {
        switch (userChoice.teamMemberChoice) {
          case 'Engineer':
            createEngineer();
            break;
          case 'Intern':
            createIntern();
            break;
          default:
            buildTeamHtmlFile();
        }
      })
      .catch(err => {
        if (err) {
          throw err;
        }
      });
  };

  const createManager = () => {
    console.log(`Let's build your team!`);
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: `What is your team Manager's name?`,
        validate: answer => {
          if (answer !== '') {
            return true;
          }
          return 'Please enter at least one character.'
        }
      },
      {
        type: 'input',
        name: 'managerId',
        message: `What is your team Manager's ID?`,
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a positive number greater than zero.'
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: `What is your team Manager's email address?`,
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address.'
        }
      },
      {
        type: 'input',
        name: 'managerOfficeNum',
        message: `What is your team Manager's office number?`,
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a positive number greater than zero.'
        }
      }
    ])
      .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
        teamMembers.push(manager);
        // TEMP
        console.log(teamMembers);
        createTeam();
      })
      .catch(err => {
        if (err) {
          throw err;
        };
      });
  };

  const createEngineer = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of your Engineer?',
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: 'input',
        name: 'engineerId',
        message: `What is your Engineer's ID?`,
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a positive number greater than zero.'
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: `What is your Engineer's email address?`,
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address.'
        }
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: `What is your Engineer's Github Username?`,
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
    ])
      .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        // TEMP
        console.log(teamMembers);
        createTeam()
      })
      .catch(err => {
        if (err) {
          throw err;
        }
      });
  };

  const createIntern = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: `Please enter the intern's name.`,
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: 'input',
        name: 'internId',
        message: `Please enter the intern's ID.`,
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a positive number greater than zero.'
        }
      },
      {
        type: 'input',
        name: 'internEmail',
        message: `Please enter the intern's email address.`,
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address.'
        }
      },
      {
        type: 'input',
        name: 'internSchool',
        message: `Please enter the intern's School.`,
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
    ])
      .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern)
        // TEMP
        console.log(teamMembers);
        createTeam();
      })
      .catch(err => {
        if (err) {
          throw err;
        };
      });
  };

  const buildTeamHtmlFile = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputFileName, render(teamMembers), 'utf-8');
  };

  createManager();
};

init();


