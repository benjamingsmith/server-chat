const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        // Broadcast the message to all connected clients
        io.emit('chat message', msg);

        // log out the user name and the message
        console.log(`New message from ${socket.id} - ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = 3000;
http.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});