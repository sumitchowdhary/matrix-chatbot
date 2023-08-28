// Message.js
import React from 'react';
import "../App.css";

const Message = ({ message, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      {message}
    </div>
  );
};

export default Message;
