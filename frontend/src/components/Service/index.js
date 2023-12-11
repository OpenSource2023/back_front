import React, { useState, useEffect } from 'react';
import Navbar2 from '../Navbar2';
import './service.css';

const ChatApp = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async (message, sender = 'user') => {
    const newMessage = { sender, message };
    setChatHistory((prevHistory) => [...prevHistory, newMessage]);
    setUserInput('');

    try {
      const response = await fetch('http://localhost:5055/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender, message }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage = data && data.length > 0 ? data[0].text : 'No response from the bot';

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'bot', message: botMessage },
      ]);
    } catch (error) {
      console.error('Error sending message to Rasa:', error);
    }
  };

  useEffect(() => {
    const chatHistoryDiv = document.getElementById('chat-history');
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;

    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    const storedChatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    setChatHistory(storedChatHistory);
  }, []);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      sendMessage(userInput);
    }
  };

  return (
    <div className="chat-container">
      <div id="chat-history" className="chat-history">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`message ${chat.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {chat.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="메시지를 입력하세요"
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div>
      <Navbar2 />
      <ChatApp />
      <footer className="footer">
        <p className="footer-by">made by OpenSource</p>
      </footer>
    </div>
  );
};

export default Service;
