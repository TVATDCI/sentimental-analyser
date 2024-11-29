import React from 'react';
import './App.css';
import EmojiButton from './components/EmojiButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Emoji Picker</h1>
      <div>
        <EmojiButton emoji="😀" code=":smile:" />
        <EmojiButton emoji="😎" code=":sunglasses:" />
        <EmojiButton emoji="😂" code=":joy:" />
        {/* Add more EmojiButton components as needed */}
      </div>
      </header>
    </div>
  );
}

export default App;
