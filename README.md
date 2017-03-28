## Task Manager
A simple Task Manager project using MEAN (MongoDB, Express, Angular, Node) stack.
SPA based on https://github.com/angular/angular2-seed#readme. Backend API uses (mLab) MongoLab remote database https://mlab.com.

### SPA (Angular2) Usage
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script

### Backend (NodeJS) Usage
- open the `api` directory
- run `npm install` to install dependencies
- run `npm run dev` to fire up NodeJS server (backend default port: 3500)
- if you want to use other port, open `index.js` file, then change port in `const APP_PORT` or set the environment variable `PORT`