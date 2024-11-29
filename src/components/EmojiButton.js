import React from 'react';

const EmojiButton = ({ emoji, code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert(`Copied: ${code}`);
    });
  };

  return (
    <button onClick={copyToClipboard} style={{ margin: '5px' }}>
      {emoji} Copy
    </button>
  );
};

export default EmojiButton;
