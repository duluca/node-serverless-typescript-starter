# node-serverless-typescript-starter
> A serverless starter TypeScript project with tsconfig, linting, Jasmine unit testing and VS Code plug-ins

## Features
- Pure TypeScript development with `async`/`await` asynchronous coding
- Serverless CLI support (tested on AWS Lambda)
- VS Code Debugging support
- Jasmine unit tests with `npm test`
- npm scripts to deploy, tail logs and invoke deployed function
- Linting with `tslint`
- Coding standards enforcements and auto-fixing with `prettier`

## Installation
1. `npm install`
2. `npm test`
3. Debug using VS Code debug tools -- `debug.ts` exists solely for debugging purposes

## Deployment
`serverless.yml` contains AWS Lambda configuration

1. `npm run deploy`
2. `npm run invoke` to test deployment



