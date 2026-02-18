import React from 'react';

/**
 * Drill 29: Card with Dark Mode Colors
 * 
 * Requirements:
 * - Demo container:
 *   - Add a button to toggle dark mode
 * 
 * - Container:
 *   - All-around padding 8 units
 *   - Light mode: background gray (100 shade)
 *   - Dark mode: background gray (900 shade)
 *   - Transition background over 200 milliseconds
 * 
 * - Card:
 *   - Light mode: background white
 *   - Dark mode: background gray (800 shade)
 *   - Light mode: border gray (300 shade)
 *   - Dark mode: border gray (700 shade)
 *   - Large rounded corners
 *   - All-around padding 6 units
 *   - Maximum width 384px
 *   - Medium shadow (both modes)
 * 
 * - Title:
 *   - Font size extra large
 *   - Font weight bold
 *   - Bottom margin 2 units
 *   - Light mode: text gray (900 shade)
 *   - Dark mode: text white
 * 
 * - Description:
 *   - Light mode: text gray (600 shade)
 *   - Dark mode: text gray (300 shade)
 *   - Bottom margin 4 units
 * 
 * - Button:
 *   - Light mode: background blue (500 shade)
 *   - Dark mode: background blue (600 shade)
 *   - Text white
 *   - Horizontal padding 4 units, vertical padding 2 units
 *   - Medium rounded corners
 *   - Light mode hover: background blue (600 shade)
 *   - Dark mode hover: background blue (700 shade)
 */

export default {
  title: '08 Dark Mode/29 Card Dark Mode',
};

export const Starter = () => {
  const [isDark, setIsDark] = React.useState(false);
  
  return (
    <div className={isDark ? 'dark' : ''}>
      <div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="mb-8 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          Toggle Dark Mode
        </button>
        
        <div>
          <h2>Dark Mode Card</h2>
          <p>
            This card adapts its colors based on the dark mode setting, providing
            a comfortable reading experience in both light and dark environments.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};
