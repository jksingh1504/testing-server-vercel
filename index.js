const { exec } = require('child_process');

// Set port (default: 3000). For Heroku, we need to use
// the port set by the environment variable $PORT
const port = process.env.PORT || 3001;

const command = `json-server --watch db.json --port ${port} --routes routes.json`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log('Error running exec', err);
    return;
  }
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
});


// const jsonServer=require("json-server")
// const server = jsonServer.create();
// const jsonRouter = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(jsonRouter);
// server.listen(3000, () => {
//   console.log('JSON Server is running');
// });