// CloseIcon.js
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // You can import the desired close icon from react-icons

const CloseIcon = ({ onClick }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <AiOutlineClose size={24} />
    </div>
  );
};

export default CloseIcon;
