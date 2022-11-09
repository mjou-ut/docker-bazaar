const http = require('http');
const moment = require('moment');


const hostname = '0.0.0.0';
const port = 3000;

const content = () => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  return `Hello UZ people demo now is ${currentTime}`;
}


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(content());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
