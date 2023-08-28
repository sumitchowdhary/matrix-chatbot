// ChatIcon.js
import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';
import ChatBox from './ChatBox'; // Import the ChatBox component

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={toggleChat} // Open/close the chat box on click
      >
        <FaComment size={24} />
      </div>
      <ChatBox isOpen={isOpen} onClose={toggleChat} /> {/* Pass isOpen and onClose props */}
    </div>
  );
};

export default ChatIcon;
