const express = require('express'); // import express package

const server = express(); // creates the server

// handle requests at the api root '/'
server.get('/', (req, res) => {
    res.send('Hello my loves from Express')
});

// watch for connections of the port 5000
server.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
});

// run the server by typing `node server.js` and visit http://localhost:5000 in the browser