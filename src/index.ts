import * as core from '@actions/core';
import { runAction } from './action';

const token = core.getInput('repo-token', { required: true });
const repoName = core.getInput('repo-name', { required: true });
const customCommand = core.getInput('custom-command', { required: false });
const workDirectory = './.private-action';

runAction({
  token,
  repoName,
  workDirectory,
  customCommand
})
  .then(() => {
    core.info('Action completed successfully');
  })
  .catch(e => {
    core.setFailed(e.toString());
  });
