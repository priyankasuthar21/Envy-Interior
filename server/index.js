const sqlite3 = require('sqlite3').verbose();
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {

  let db = new sqlite3.Database(':database:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});