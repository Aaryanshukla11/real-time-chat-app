import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

// Connect to the backend server (your local server on port 3000)
const socket = io('http://localhost:3000');

// Styled components for the layout new change -- part 2
const AppContainer = styled.div`
  background-color: #f4f7f6;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica Neue', sans-serif;
`;


const ChatContainer = styled.div`
  background-color: #fff;
  width: 400px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #007bff;
  padding: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f4f7f6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const SendButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div`
  background-color: #e9e9eb;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  max-width: 70%;
  word-wrap: break-word;
  align-self: ${(props) => (props.isOwnMessage ? 'flex-end' : 'flex-start')};
`;

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', message, 'room1');  // send message to room1
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
    }
  };

  return (
    <AppContainer>
      <ChatContainer>
        <Header>Chat Room</Header>
        <MessagesContainer>
          {messages.map((msg, index) => (
            <Message key={index} isOwnMessage={false}>{msg}</Message>
          ))}
        </MessagesContainer>
        <InputContainer>
          <InputField
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <SendButton onClick={sendMessage}>Send</SendButton>
        </InputContainer>
      </ChatContainer>
    </AppContainer>
  );
}

export default App;
