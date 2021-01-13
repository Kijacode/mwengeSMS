const http = require('http');
const app = require('../app');


const PORT = process.env.PORT || 7000;
app.set('port', PORT);

const server = http.createServer(app);

server.on('listening', function () {
  console.log('Server is listening on ' + PORT);
});

server.listen(PORT);
