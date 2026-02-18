import React from 'react';

/**
 * Drill 28: Button with Dark Mode Variant
 * 
 * Requirements:
 * - Demo container:
 *   - Add a button to toggle dark mode (toggle 'dark' class on container)
 * 
 * - Container:
 *   - All-around padding 8 units
 *   - Light mode: background white
 *   - Dark mode: background gray (900 shade)
 *   - Transition background smoothly over 200 milliseconds
 * 
 * - Primary button:
 *   - Light mode: background blue (500 shade)
 *   - Dark mode: background blue (600 shade)
 *   - Text white (both modes)
 *   - Horizontal padding 4 units, vertical padding 2 units
 *   - Medium rounded corners
 *   - Font weight medium
 *   - Cursor pointer
 *   - Light mode hover: background blue (600 shade)
 *   - Dark mode hover: background blue (700 shade)
 *   - Transition all over 150 milliseconds
 * 
 * Hint: Click "Toggle Dark Mode" to see the button adapt
 */

export default {
  title: '08 Dark Mode/28 Button Dark Mode',
};

export const Starter = () => {
  const [isDark, setIsDark] = React.useState(false);
  
  return (
    <div className={isDark ? 'dark' : ''}>
      <div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          Toggle Dark Mode
        </button>
        
        <button>
          Primary Action
        </button>
      </div>
    </div>
  );
};
