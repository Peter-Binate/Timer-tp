const http = require('http');

const server = http.createServer((req, res) => {
  // Routing
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});