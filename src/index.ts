import * as core from '@actions/core';
import { runAction } from './action';

const token = core.getInput('repo-token', { required: true });
const repoName = core.getInput('repo-name', { required: true });
const buildScriptName = core.getInput('build-script-name', { required: true });
const workDirectory = './.private-action';

runAction({
  token,
  repoName,
  workDirectory,
  buildScriptName
})
  .then(() => {
    core.info('Action completed successfully');
  })
  .catch(e => {
    core.setFailed(e.toString());
  });
