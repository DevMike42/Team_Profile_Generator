const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

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
          default:
            break;
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

  createManager();
};

init();