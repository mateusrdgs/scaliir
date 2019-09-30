interface ProcessEnv extends NodeJS.ProcessEnv {
  APP: any
}

interface Process extends NodeJS.Process {
  env: ProcessEnv
}

declare var process: Process;