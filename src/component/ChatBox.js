// ChatBox.js
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import CloseIcon from "./CloseIcon";
import ChatInput from "./Chatinput";

const ChatBox = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  // const handleSendMessage = async (message, isMe = false) => {
  //   setMessages((prev) => [...prev, { text: message, isUser: isMe }]);
  // };

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  const handleSendMessage = async (message, isMe = false) => {
    // Update the state with the new message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: isMe },
    ]);
    // Scroll to the bottom after a short delay
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  useEffect(() => {
    // Set the initial welcome message
    setMessages([
      { text: "Welcome to Matrix Media Search Box!", isUser: false },
    ]);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: isOpen ? "20px" : "-300px",
          backgroundColor: "#fff",
          width: "300px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          transition: "right 0.3s ease",
        }}
      >
        <CloseIcon className="closeIcon" onClick={onClose} />
        <h1 className="title">Matrix Media</h1>

        {/* <div className="chat">
          <div className="chat_history" ref={chatContainerRef}>
            {messages &&
              messages?.map((msg, index) => (
                <Message key={index} message={msg?.text} isUser={msg?.isUser} />
              ))}
            {isLoading && <p>please wait...</p>}
          </div>
        </div>

        <div className="chat-footer">
          <ChatInput onSendMessage={handleSendMessage} />
        </div> */}

        <div className="chat-app">
          <div className="message-container">
            {messages &&
              messages?.map((msg, index) => (
                <Message key={index} message={msg?.text} isUser={msg?.isUser} />
              ))}
          </div>
          <div className="input-container">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
