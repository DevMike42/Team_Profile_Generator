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
      message: `What is your team Manager's name?`
    },
    {
      type: 'input',
      name: 'managerId',
      message: `What is your team Manager's ID?`
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: `What is your team Manager's email address?`
    },
    {
      type: 'input',
      name: 'managerOfficeNum',
      message: `What is your team Manager's office number?`
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