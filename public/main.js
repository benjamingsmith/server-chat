 // Get username
 let username;
 while (!username || username.trim().length === 0) {
     username = prompt('Enter your username:');
     if (!username) break;
 }
 
 if (!username) {
     document.body.innerHTML = '<h2 style="text-align: center; margin-top: 50px;">Chat access denied. Please refresh to try again.</h2>';
     throw new Error('No username provided');
 }

 const socket = io();
 const messageForm = document.getElementById('message-form');
 const messageInput = document.getElementById('message-input');
 const messages = document.getElementById('chat-messages');
 const usersList = document.getElementById('users-list');

 // Update users list
 socket.on('users list', (users) => {
     usersList.innerHTML = users
         .map(user => `<li>${user === username ? user + ' (you)' : user}</li>`)
         .join('');
 });

 // Handle messages
 messageForm.addEventListener('submit', (e) => {
     e.preventDefault();
     const message = messageInput.value.trim();
     if (message) {
         // Send both username and message
         socket.emit('chat message', {
             username: username,
             message: message
         });
         messageInput.value = '';
     }
 });

 // Display messages
 socket.on('chat message', (data) => {
     appendMessage(data);
 });

 // Handle message history
 socket.on('message history', (history) => {
     history.forEach(data => {
         appendMessage(data);
     });
 });

 // Helper function to append messages
 const appendMessage = (data) => {
     const div = document.createElement('div');
     div.className = 'message';
     div.innerHTML = `<span class="username">${data.username}:</span> ${data.message}`;
     messages.appendChild(div);
     messages.scrollTop = messages.scrollHeight;
 }

 // Announce connection
 socket.emit('user connected', username);