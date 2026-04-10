import React from 'react';

function EmojiButton({ emoji, code, onCopy }) {
  const handleClick = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        if (onCopy) {
          onCopy(code);
        }
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <button
      className="emoji-button"
      onClick={handleClick}
      title={`Copy ${code}`}
    >
      {emoji}
    </button>
  );
}

export default EmojiButton;