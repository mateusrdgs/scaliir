interface ProcessEnv extends NodeJS.ProcessEnv {
  APP: any;
}

interface Process extends NodeJS.Process {
  env: ProcessEnv;
}

/* eslint-disable no-var */
declare var process: Process;
/* eslint-enable */
