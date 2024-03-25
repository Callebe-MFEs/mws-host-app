# My Workspace Host application

My Workspace is a small proof of concept application.

It's goal is to implement an application where the user can manage their tasks, exchange messages, and manage their profiles.

The application will implement the Micro-Frontend architecture, having this repository as the Host application, and each of the other three features implemented independently as micro frontend applications (MFE).

## Module Federation

[Module Federation](https://module-federation.io/docs/en/mf-docs/0.2/setup/) is used to dinamicaly load repote JavaScript modules in the browser.
Each MFE implements a JavaScript module that serves as the MFE entry point when launched inside the Host Application.

Module federation is nativily available by the webpack bundling tool, but it is also available to other building and bundling tools through plugins, like [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) plugin for [vite](https://vitejs.dev/)

The Module Federation related code in this project can be found in the files _./webpack.config.js_ and _./src/mfe/remote.ts_.

## Single SPA

[Single SPA](https://single-spa.js.org/) is the Micro-Frontend orchestrator used in this project.
It is a library that manages the loading, bootstrap, mounting and unmounting of the MFEs.
Whenever a MFE should be activated, if it was not loaded yet, the orchestrator loads it, bootstraps it and mount it in the DOM, so the user can interact with the MFE.

The Single SPA related code in this project can be found in the files _./src/mfe/bootstra.ts_ and _./src/bootstra.ts_

## Environment

- nodejs v18.17.0
- npm 9.6.7
- git (or download source code)

We recomend the use of [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage multiple node versions installation at the same time for Linux/Unix like environments.
Or we recoment the use of [NVM for Windows](https://github.com/coreybutler/nvm-windows) to do the same in a Windows environment.

## Quick Start

in a terminal window, execute:

- clone the project: `git clone https://dev.azure.com/IT-PRODUCTSENGINEERING/EA%20Playground/_git/mws-host-app`
- move into project: `cd mws-host-app`
- install dependencies: `npm install`
- run dev server: `npm start`

The application will launch automatically and be served from http://localhost:8080

## Build

By running `npm run build`, it will build the project and generate the _./dist_ folder containing all the static assets required to deploy and execute the application.

### Docker Build

The Dockerfile contains the instructions to generate a [Docker](https://www.docker.com/) Image with the application.

To generate a new Docker image, we can use the bellow command:

```bash
docker build -t mws-host-app . # it will build a docker image with tag name mws-host-app. this is the image tag used to start the container
```

Once we have our image built, we can instanciate a container and execute it

```bash
docker run -p 8080:8080 mws-host-app # this will create a docker container using the recent built image, and map the port 8080 from the host to the port 8080 from the container
```

## Testing

### Running

To execute the application in your local machine just execute `npm start` from the project's root folder in a terminal window.
It will launch the application at http://localhost:8080

You can access the Host Application.
Two access the MFEs, we have to either, launch the MFE applications in the same machie, or change the webpack proxy configuration present in the file _webpack.dev.js_.

To keep it simple, the _webpack.dev.js_ file contains a proxy configuration that maps specific paths to the mfe applications and route calls to these paths.
The default configuration requires all the MFEs to be running in the same machine as well.
If they are not running, the Host application still works, only the MFE inquestion will not be accessible.

### Unit Tests

The code also contains Unit Test to serve as examples.
To execute the unit tests we can execute `npm run test`.
It will execute all the \*.spec.ts files and also generate a coverage report in the _./reports_ folder

We can also execute `npm run test --singleRun=false` to have the tests listening for changes in the files to re-execute the unit tests again.
This way we can apply the Test Driven Development technique while implementing new features.
