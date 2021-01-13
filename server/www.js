const http = require('http');
const app = require('../app');

const { PORT = 7000 } = process.env;

const server = http.createServer(app);

server.on('listening', function () {
  console.log('Server is listening on ' + PORT);
});

server.listen(PORT);
