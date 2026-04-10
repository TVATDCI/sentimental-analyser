# Copy emoji-to-go

A React-based web application that allows users to browse and copy emoji shortcodes to the clipboard with a single click. Perfect for developers and content creators who use emoji codes in markdown, GitHub READMEs, or any platform that supports emoji shortcodes.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Technical Explanations](#technical-explanations)
  - [Why App.js (not App.jsx)?](#why-appjs-not-appjsx)
  - [How public/index.html is Connected](#how-publicindexhtml-is-connected)
- [Component Overview](#component-overview)
- [Emoji Categories](#emoji-categories)
- [Development](#development)
- [License](#license)

---

## Features

- **One-Click Copy**: Click any emoji to copy its shortcode (e.g., `:smile:`) to clipboard
- **Category Navigation**: Sidebar with accordion-style category navigation
- **Global Search**: Search emojis across all categories in real-time
- **Visual Feedback**: Toast notification confirms when code is copied
- **Responsive Design**: Works on desktop and mobile devices
- **500+ Emojis**: Organized into 6 categories

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sentimental-analyser.git

# Navigate to project directory
cd sentimental-analyser

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

Build output will be in the `build/` directory.

---

## How to Use

### Using the App

1. **Select a Category**: Click on any category in the sidebar (People, Weather, Places, Nature, Objects, Symbols)
2. **Browse Emojis**: Scroll through the emoji grid to find the emoji you want
3. **Copy**: Click on any emoji button
4. **Confirm**: A toast notification appears at the bottom of the screen confirming the code was copied
5. **Paste**: The emoji shortcode (e.g., `:smile:`) is now in your clipboard

### Finding Specific Emojis

Use the **search bar** at the top of the page:

- Type in the search box (e.g., "heart", "smile", or the shortcode)
- Results filter in real-time across ALL categories
- Click on any result to copy it

### Example Usage

Once copied, you can use the emoji code in:

**GitHub/Markdown:**

```markdown
Feeling :smile: today!
```

**Slack (with colon shortcuts):**

```
:type the shortcode between colons:
```

**Discord:**

```
::smile::
```

---

## Project Structure

```
sentimental-analyser/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── EmojiButton.js    # Individual emoji button component
│   │   ├── emojiData.js      # All emoji data and category definitions
│   │   ├── SearchBar.js      # Global search input component
│   │   ├── Sidebar.js        # Category navigation sidebar
│   │   └── Toast.js         # Copy confirmation notification
│   ├── App.js              # Main application component
│   ├── App.css            # Application styles
│   ├── index.js           # Application entry point
│   └── index.css         # Global styles
├── package.json
└── README.md
```

---

## Technical Explanations

### Why App.js (not App.jsx)?

This project uses `.js` extension for React components instead of `.jsx`. Here's why:

**It's purely a naming convention:**

- React doesn't require the `.jsx` extension - it works with plain `.js` files
- `.jsx` is optional syntax indicating "this file contains JSX (XML-like JavaScript)"
- Create React App defaults to `.js` files, which is why you see `App.js` instead of `App.jsx`

**Both approaches work identically:**

```javascript
// App.js - works fine
// App.jsx - also works fine
// No functional difference
```

You can rename files to `.jsx` if you prefer that convention, but there's no requirement to do so.

### How public/index.html is Connected

The `public/index.html` file is the **entry point** that React mounts into. Here's the connection flow:

**1. The HTML Template (`public/index.html`):**

- Line 31: `<div id="root"></div>` - This empty div is where React will render the app
- The `id="root"` matches the selector in React code

**2. The React Entry Point (`src/index.js`):**

```javascript
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

**The flow:**

1. Browser loads `index.html`
2. Finds `<div id="root"></div>`
3. React takes that div and inserts the `<App />` component into it
4. Your app renders inside that div

**Key elements in index.html:**

| Line | Purpose                                                    |
| ---- | ---------------------------------------------------------- |
| 4    | `<meta charset="utf-8" />` - Supports all emoji characters |
| 6    | `<meta name="viewport" ...>` - Responsive design           |
| 27   | `<title>React App</title>` - Browser tab title             |
| 30   | `<noscript>` - Message for users without JS                |
| 31   | `<div id="root"></div>` - React mounts here                |
| 17   | `<link rel="manifest">` - PWA support                      |

---

## Component Overview

### EmojiButton

Renders a single clickable emoji button.

**Props:**

| Prop     | Type     | Description                            |
| -------- | -------- | -------------------------------------- |
| `emoji`  | string   | The emoji character to display         |
| `code`   | string   | The shortcode (e.g., `:smile:`)        |
| `onCopy` | function | Optional callback when emoji is copied |

**Usage:**

```jsx
<EmojiButton emoji="😄" code=":smile:" onCopy={(code) => console.log(code)} />
```

### Sidebar

Accordion-style category navigation component.

**Props:**

| Prop               | Type     | Description                    |
| ------------------ | -------- | ------------------------------ |
| `activeCategory`   | string   | Currently selected category    |
| `onCategoryChange` | function | Callback when category changes |

**Usage:**

```jsx
<Sidebar activeCategory="people" onCategoryChange={(cat) => setCategory(cat)} />
```

### SearchBar

Global search input for filtering emojis.

**Props:**

| Prop             | Type     | Description                        |
| ---------------- | -------- | ---------------------------------- |
| `searchQuery`    | string   | Current search input value         |
| `onSearchChange` | function | Callback when search input changes |

**Usage:**

```jsx
<SearchBar searchQuery={query} onSearchChange={setQuery} />
```

### Toast

Notification component that displays copy confirmation.

**Props:**

| Prop        | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| `message`   | string   | Notification message text            |
| `isVisible` | boolean  | Whether toast is visible             |
| `onClose`   | function | Callback to close toast              |
| `duration`  | number   | Auto-close timeout (default: 2000ms) |

**Usage:**

```jsx
<Toast
  message="Copied: :smile:"
  isVisible={true}
  onClose={() => setVisible(false)}
/>
```

### emojiData

Contains all emoji data organized by category.

**Exports:**

| Export           | Type   | Description                   |
| ---------------- | ------ | ----------------------------- |
| `people`         | array  | People/category emojis        |
| `weather`        | array  | Weather emojis                |
| `places`         | array  | Places/travel emojis          |
| `nature`         | array  | Nature/animal emojis          |
| `objects`        | array  | Objects/items emojis          |
| `symbols`        | array  | Symbols characters            |
| `categories`     | object | All categories combined       |
| `categoryLabels` | object | Display labels for categories |

**Emoji Object Structure:**

```javascript
{
  emoji: "😄",    // The display emoji
  code: ":smile:"  // The shortcode
}
```

**Usage:**

```javascript
import { categories, categoryLabels, people } from "./emojiData";

// Get all emojis from a category
const peopleEmojis = people;

// Get all category data
const allCategories = categories;
const labels = categoryLabels;
// => { people: 'People', weather: 'Weather', ... }
```

---

## Emoji Categories

| Category | Count | Description                       |
| -------- | ----- | --------------------------------- |
| People   | ~200  | Faces, emotions, hearts, gestures |
| Weather  | 9     | Sun, rain, snow, clouds           |
| Places   | ~120  | Buildings, vehicles, flags        |
| Nature   | ~110  | Animals, plants, celestial        |
| Objects  | ~260  | Items, food, activities           |
| Symbols  | ~80   | Numbers, arrows, signs            |

---

## Development

### Running Tests

```bash
npm test
```

### Code Style

- This project uses Create React App's default ESLint configuration
- Run `npm run lint` to check for issues

### Adding New Emojis

To add new emojis, edit `src/components/emojiData.js`:

1. Find the appropriate category array
2. Add a new object with `emoji` and `code` properties:

```javascript
export const people = [
  // existing emojis...
  { emoji: "🆕", code: ":new_emoji:" }, // Add here
];
```

---

## License

MIT License - feel free to use this project for learning or your own projects!

---

## Acknowledgments

- Originally created as a learning project while starting to learn JavaScript/React
- Emoji data based on GitHub's emoji shortcode format
- Built with Create React App

---

## FAQ

**Q: Why isn't the clipboard working?**
A: Some browsers require HTTPS or localhost for clipboard access. Make sure you're running on localhost or using a secure context.

**Q: Can I use this in my own project?**
A: Yes! The components are reusable. Copy the `src/components/` folder and modify as needed.

**Q: How do I add more emojis?**
A: Edit `src/components/emojiData.js` and add new entries to the appropriate category array.
