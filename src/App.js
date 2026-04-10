import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import EmojiButton from './components/EmojiButton';
import Toast from './components/Toast';
import { categories, categoryLabels, people, weather, places, nature, objects, symbols } from './components/emojiData';
import './App.css';

const allEmojis = [...people, ...weather, ...places, ...nature, ...objects, ...symbols];

function App() {
  const [activeCategory, setActiveCategory] = useState('people');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const categoryData = useMemo(() => {
    return categories[activeCategory] || [];
  }, [activeCategory]);

  const filteredEmojis = useMemo(() => {
    if (!searchQuery.trim()) {
      return categoryData;
    }
    const query = searchQuery.toLowerCase();
    return allEmojis.filter(
      item => item.code.toLowerCase().includes(query) ||
             item.emoji.includes(query)
    );
  }, [categoryData, searchQuery]);

  const handleCopy = (code) => {
    setToastMessage(`Copied: ${code}`);
    setToastVisible(true);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  const handleToastClose = () => {
    setToastVisible(false);
  };

  return (
    <div className="app">
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <main className="main-content">
        <header className="app-header">
          <h1>Emoji Copy</h1>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </header>
        <div className="category-title">
          <h2>{categoryLabels[activeCategory]}</h2>
          <span className="emoji-count">{filteredEmojis.length} emojis</span>
        </div>
        <div className="emoji-grid">
          {filteredEmojis.map((item, idx) => (
            <EmojiButton
              key={`${item.code}-${idx}`}
              emoji={item.emoji}
              code={item.code}
              onCopy={handleCopy}
            />
          ))}
        </div>
        {filteredEmojis.length === 0 && (
          <div className="no-results">
            No emojis found for "{searchQuery}"
          </div>
        )}
      </main>
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleToastClose}
      />
    </div>
  );
}

export default App;