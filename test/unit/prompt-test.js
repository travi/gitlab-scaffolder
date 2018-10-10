// import gitConfig from 'git-config';
import inquirer from 'inquirer';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import {prompt} from '../../src/prompt';

suite('prompt', () => {
  let sandbox;
  const answers = any.listOf(any.string);

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(inquirer, 'prompt');
  });

  teardown(() => sandbox.restore());

  test('that the options are optional', async () => {
    inquirer.prompt.resolves(answers);

    assert.equal(await prompt(), answers);
  });

  test('that the gitlab user is provided as the default owner value if available in the global config', async () => {
    inquirer.prompt
      .withArgs([
        {
          name: 'repoOwner',
          message: 'What is the id of the repository owner?',
          default: undefined
        }
      ])
      .resolves(answers);

    assert.equal(await prompt({}), answers);
  });

  test('that the gitlab user is not used as the default owner value an override is provided', async () => {
    const account = any.word();
    inquirer.prompt
      .withArgs([
        {
          name: 'repoOwner',
          message: 'What is the id of the repository owner?',
          default: account
        }
      ])
      .resolves(answers);

    assert.equal(await prompt({account}), answers);
  });
});
