import React from 'react';
import EmojiButton from './components/EmojiButton';
import emojiData from './components/emojiData';
import './App.css';

function App() {
  return (
    <div className='App-header' >
      <h1>Emoji Copy</h1>
      <div className='btnContainer' >
        {emojiData.map(({ emoji, code }) => (
          <EmojiButton key={code} emoji={emoji} code={code} />
        ))}
        </div>
    </div>
  );
}

export default App;
