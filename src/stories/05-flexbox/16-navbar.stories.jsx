/**
 * Drill 16: Navigation Bar (Logo Left, Links Right)
 * 
 * Requirements:
 * - Nav container:
 *   - Should display as flex
 *   - Should distribute space between items (logo on left, links on right)
 *   - Should align items vertically centered
 *   - All-around padding 4 units
 *   - Background gray (800 shade)
 * 
 * - Logo:
 *   - Font size extra large
 *   - Font weight bold
 *   - Text color white
 * 
 * - Links container:
 *   - Should display as flex
 *   - Gap between links should be 6 units
 * 
 * - Each link:
 *   - Text color gray (300 shade)
 *   - On hover, text color should be white
 *   - Transition should be smooth over 150 milliseconds
 */

export default {
  title: '05 Flexbox/16 Navbar',
};

export const Starter = () => {
  return (
    <nav>
      <div>Logo</div>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};
