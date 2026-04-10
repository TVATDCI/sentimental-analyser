import React, { useState } from 'react';
import { categories, categoryLabels } from './emojiData';

function Sidebar({ activeCategory, onCategoryChange }) {
  const [expanded, setExpanded] = useState({ people: true });

  const toggleCategory = (key) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleCategoryClick = (key) => {
    onCategoryChange(key);
    toggleCategory(key);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Categories</h2>
      </div>
      <nav className="sidebar-nav">
        {Object.keys(categories).map(key => (
          <div key={key} className="sidebar-category">
            <button
              className={`category-header ${activeCategory === key ? 'active' : ''}`}
              onClick={() => handleCategoryClick(key)}
            >
              <span className="category-icon">
                {categories[key][0]?.emoji || '📁'}
              </span>
              <span className="category-name">{categoryLabels[key]}</span>
              <span className="category-count">({categories[key].length})</span>
              <span className={`expand-icon ${expanded[key] ? 'expanded' : ''}`}>
                ▼
              </span>
            </button>
            {expanded[key] && (
              <div className="category-items">
                {categories[key].slice(0, 10).map((item, idx) => (
                  <button
                    key={idx}
                    className="emoji-preview"
                    onClick={() => onCategoryChange(key)}
                  >
                    {item.emoji}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;