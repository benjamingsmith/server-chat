const net = require('net');
require('dotenv').config();

// Configuration
const HOST = process.env.HOST;
const PORT = process.env.PORT;

// Create a TCP client
const client = new net.Socket();

// Connect to the server
client.connect(PORT, HOST, () => {
  console.log(`Connected to server at ${HOST}:${PORT}`);
  client.write('Hello from client!');
});

// Receive data from the server
client.on('data', (data) => {
  console.log('Received:', data.toString());
});

// Handle connection close
client.on('close', () => {
  console.log('Connection closed');
});

// Handle errors
client.on('error', (err) => {
  console.error('Connection error:', err.message);
});
