const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

// Add message history array
const messageHistory = [];
const MAX_HISTORY = 50; // Limit history to last 50 messages

// Track connected users
const connectedUsers = new Set();

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve the chat page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('User connected');
    let currentUser = null;
    
    // Send message history to newly connected users
    socket.emit('message history', messageHistory);
    
    socket.on('user connected', (username) => {
        currentUser = username;
        connectedUsers.add(username);
        console.log(`${username} connected`);
        
        // Broadcast updated users list to all clients
        io.emit('users list', Array.from(connectedUsers));
    });

    socket.on('chat message', (data) => {
        // Store message in history
        messageHistory.push(data);
        if (messageHistory.length > MAX_HISTORY) {
            messageHistory.shift(); // Remove oldest message if exceeding limit
        }
        
        // Broadcast the message with username
        io.emit('chat message', {
            username: data.username,
            message: data.message
        });
    });

    socket.on('disconnect', () => {
        if (currentUser) {
            connectedUsers.delete(currentUser);
            // Broadcast updated users list
            io.emit('users list', Array.from(connectedUsers));
            console.log(`${currentUser} disconnected`);
        }
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});