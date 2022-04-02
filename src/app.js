'use strict';

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const objToReturn = {
    parts: url.pathname.split('/').slice(1),
    query: Object.fromEntries(url.searchParams.entries()),
  };

  res.end(JSON.stringify(objToReturn));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
