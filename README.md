# 🚀 Server Chat

A real-time chat application built with Node.js, Express, and Socket.IO. Features instant messaging, user management, and message history in a clean, responsive interface.

![Chat Application](https://img.shields.io/badge/status-active-success.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![Socket.IO](https://img.shields.io/badge/socket.io-4.8.1-blue.svg)

## ✨ Features

- **Real-time Messaging**: Instant message delivery using WebSocket connections
- **User Management**: Track online users with live updates
- **Message History**: Automatically loads the last 50 messages for new users
- **Clean UI**: Modern, responsive design with user-friendly interface
- **Username System**: Simple username-based identification
- **Auto-scroll**: Messages automatically scroll to show latest content

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js, Socket.IO
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Real-time Communication**: WebSocket (Socket.IO)
- **Styling**: Custom CSS with modern design patterns

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/server-chat.git
   cd server-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

## 🎯 Usage

1. **Join the Chat**: Enter a username when prompted
2. **Send Messages**: Type your message and press Enter or click Send
3. **View Users**: See who's online in the users panel
4. **Message History**: New users automatically see recent conversation history

## 📁 Project Structure
server-chat/
├── public/
│ ├── index.html # Main HTML file
│ ├── main.js # Client-side JavaScript
│ └── styles.css # CSS styling
├── tcp-server.js # Express server with Socket.IO

## 🔧 How It Works

### Server Side (`tcp-server.js`)
- **Express Server**: Serves static files and handles HTTP requests
- **Socket.IO Integration**: Manages WebSocket connections for real-time communication
- **User Tracking**: Maintains a set of connected users
- **Message History**: Stores the last 50 messages in memory
- **Event Handling**: Processes user connections, messages, and disconnections

### Client Side (`public/main.js`)
- **Username Prompt**: Collects user identification on load
- **Socket Connection**: Establishes real-time connection with server
- **Message Display**: Renders messages with username formatting
- **User List**: Shows online users with current user indication
- **Form Handling**: Manages message input and submission

## 🌟 Key Features Explained

### Real-time Updates
- Users see messages instantly as they're sent
- Online user list updates when people join/leave
- No page refresh needed

### Message Persistence
- Last 50 messages are stored in server memory
- New users see recent conversation history
- Automatic cleanup of old messages

### User Experience
- Clean, modern interface
- Responsive design
- Auto-scrolling message area
- Visual distinction for your own username

## 🚀 Development

To run in development mode:

```bash
# Start the server with auto-restart on changes
npm start

# Or run directly with node
node tcp-server.js
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Private messaging
- [ ] Chat rooms/channels
- [ ] Message persistence with database
- [ ] File sharing
- [ ] Emoji support
- [ ] User authentication
- [ ] Message timestamps
- [ ] Typing indicators

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

Made with ❤️ by @benjamingsmith using Node.js and Socket.IO