const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const message = 'This is G3's sandbox using CloudShell to display a html webpage #prep #GCP #interview';
const fullMessage = `<html><body><h1>${message}</h1></body></html>\n`;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(fullMessage);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});