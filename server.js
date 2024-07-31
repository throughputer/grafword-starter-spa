const express = require('express');
const http = require('http');
const fs = require("fs");
const path = require("path");
const app = express();

const hostname = 'localhost';
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/profile', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
