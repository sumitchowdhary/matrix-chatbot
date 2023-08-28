// ChatInput.js
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // You can import the send icon from react-icons
import "../App.css";
import axios from "axios";
import { API } from "../api/config";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
      // Send user message to API and receive bot response
      try {
        const response = await axios.get(
          `${API}=${encodeURIComponent(message)}`
        );
        const botResponse = response;
        onSendMessage(botResponse?.data?.response, true); // Display the bot's response
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (message.trim() !== "") {
        onSendMessage(message);
        setMessage("");

        // Send user message to API and receive bot response
        try {
          const response = await axios.get(
            `${API}=${encodeURIComponent(message)}`
          );
          const botResponse = response;
          onSendMessage(botResponse?.data?.response, true); // Display the bot's response
        } catch (error) {
          console.error("Error sending message:", error);
        }
      }
    }
  };

  return (
    <div className="chat-input">
      <textarea
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
        onKeyPress={handleKeyPress}
        className="textInput"
      ></textarea>
      <button onClick={handleSendClick}>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
