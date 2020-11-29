const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const teamMembers = [];

const init = () => {
  createManager();
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
      console.log(teamMembers);

    })
    .catch(err => {
      if (err) {
        throw err;
      };
    });

};

init();