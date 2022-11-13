import {prompt as overridablePrompt} from '@form8ion/overridable-prompts';

export function prompt({account} = {}) {
  return overridablePrompt([
    {
      name: 'repoOwner',
      message: 'What is the id of the repository owner?',
      default: account
    }
  ]);
}
