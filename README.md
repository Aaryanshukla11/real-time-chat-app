

# Real-Time Chat App 

A full-stack real-time chat application built using **Node.js**, **Express**, **Socket.IO**, and optionally **MongoDB** for message persistence. This app enables users to join chat rooms and exchange messages instantly in real-time.

---

##  Features

> Real-time messaging with WebSockets (Socket.IO)
> Multiple chat rooms
> User join/leave notifications
> Clean and responsive UI
> (Optional) Message history stored via database
> Easy to extend with authentication and media support

---

## Project Structure

```
real-time-chat-app/
├── public/                 # Frontend static files
│   ├── css/
│   └── js/
├── src/
│   ├── server.js          # Express + Socket.IO server
│   └── utils/             # Helper modules
├── .gitignore
├── package.json
└── README.md
```

---

##  Tech Stack

| Layer                | Technology            |
| -------------------- | --------------------- |
| Backend              | Node.js, Express      |
| Real-time            | Socket.IO             |
| Frontend             | HTML, CSS, JavaScript |
| Optional Persistence | MongoDB               |

---

##  Live Demo

> 🔗 *(Add your deployed link here, e.g., Vercel, Render, Railway, Heroku)*

---

##  Installation

1. **Clone the repository**

```bash
git clone https://github.com/Aaryanshukla11/real-time-chat-app.git
cd real-time-chat-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Create environment config**
   If you’re using environment variables (optional):

```
PORT=3000
MONGO_URI=your_mongodb_uri
```

4. **Run the server**

```bash
npm start
```

5. **Open in browser**

```
http://localhost:3000
```

---

##  Usage

1. Enter your **username**
2. Select or create a **chat room**
3. Start chatting in real-time!

---

## How It Works (High-Level)

 **Server (Socket.IO)**

* Listens for client connections
* Handles join/leave events
* Broadcasts messages to room members

 **Client (Browser)**

* Connects via WebSocket
* Sends and receives messages
* Updates UI instantly

---

## API Endpoints

| Type | Route        | Description        |
| ---- | ------------ | ------------------ |
| GET  | `/`          | Serves chat UI     |
| WS   | `/socket.io` | WebSocket endpoint |

---

##  Contributing

Contributions, issues, and feature requests are welcome!

1. Fork it
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "feat: description"`)
4. Push (`git push origin feature-name`)
5. Open a Pull Request
