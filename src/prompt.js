import {prompt as promptWithInquirer} from 'inquirer';

export function prompt({account} = {}) {
  return promptWithInquirer([
    {
      name: 'repoOwner',
      message: 'What is the id of the repository owner?',
      default: account
    }
  ]);
}
