# Frontend Mentor - Calculator App Solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-main). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Features](#features)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- Perform mathematical operations (+, -, ×, ÷)
- Adjust calculator theme between three color schemes
- See hover and focus states for interactive elements
- View the optimal layout across different screen sizes
- See their previous calculations
- Use keyboard input for calculations

### Features

- **Theme Switching**: Three distinct color themes:
  - Theme 1: Dark blue/red theme (default)
  - Theme 2: Light gray/cyan theme
  - Theme 3: Dark violet/cyan theme
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Theme transitions and button interactions
- **Error Handling**: Prevents division by zero and handles invalid inputs
- **Local Storage**: Remembers user's theme preference

### Screenshot

![Calculator App](./screenshot.jpg)

### Links

- Live Site URL: [Add your live site URL here]
- Solution URL: [Add your solution URL here]

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- LocalStorage for persistent settings

### What I Learned

- Implementing theme switching using CSS variables
- Managing calculator logic with JavaScript
- Creating responsive layouts with CSS Grid
- Handling user input validation
- Using LocalStorage for persistent settings
- Implementing smooth transitions and animations

Here are some code examples of what I learned:

```html
<!-- Theme switcher structure -->
<div class="theme-switcher">
  <span>THEME</span>
  <div class="toggle">
    <div class="toggle-labels">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <div class="toggle-track">
      <div class="toggle-thumb"></div>
    </div>
  </div>
</div>
```

```css
/* Theme implementation using CSS variables */
.theme-1 {
  --main-bg: hsl(222, 26%, 31%);
  --keypad-bg: hsl(223, 31%, 20%);
  --screen-bg: hsl(224, 36%, 15%);
  /* ... other theme variables */
}
```

```javascript
// Theme switching logic
function setTheme(theme) {
  document.body.className = `theme-${theme}`;
  localStorage.setItem('theme', theme);
  currentTheme = theme;
}
```

### Key Features Explained

1. **Theme System**:
   - Uses CSS variables for color management
   - Smooth transitions between themes
   - Persistent theme selection

2. **Calculator Logic**:
   - Handles basic arithmetic operations
   - Maintains calculation history
   - Validates user input
   - Prevents common errors

3. **Responsive Design**:
   - Mobile-first approach
   - Fluid typography using clamp()
   - Optimized button sizes for touch
   - Consistent layout across devices

## Author

- Frontend Mentor - [@samuelsmith442]


## Acknowledgments

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
- Coded with ❤ ️ by [Samuel Smith](https://github.com/samuelsmith442)
