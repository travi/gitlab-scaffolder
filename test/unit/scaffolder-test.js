import {assert} from 'chai';

import {scaffold} from '../../src/scaffolder.js';

suite('scaffold', () => {
  test('that a no-op function is provided for the scaffold expectation', async () => {
    assert.deepEqual(await scaffold({}), {});
  });
});
