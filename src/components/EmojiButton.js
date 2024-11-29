// Version: 2
import React from 'react';

function EmojiButton({ emoji, code }) {
  const handleClick = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        console.log(`Copied: ${code}`);
        alert(`Copied to clipboard: ${code}`); // Optional feedback
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <button
      onClick={handleClick}
    >
      {emoji} 
    </button>
  );
}

export default EmojiButton;

{/*version 1
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
*/}
