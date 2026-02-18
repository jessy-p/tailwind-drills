/**
 * Drill 19: Footer with 3 Equal Columns
 * 
 * Requirements:
 * - Footer container:
 *   - Should display as flex
 *   - Gap between columns should be 8 units
 *   - All-around padding 8 units
 *   - Background gray (800 shade)
 * 
 * - Each column:
 *   - Should grow equally to fill available space (all same width)
 * 
 * - Column heading:
 *   - Font size large
 *   - Font weight semibold
 *   - Text color white
 *   - Bottom margin 4 units
 * 
 * - Links container:
 *   - Should display as flex
 *   - Should arrange links vertically
 *   - Gap between links should be 2 units
 * 
 * - Each link:
 *   - Text color gray (400 shade)
 *   - Font size small
 *   - On hover, text color should be white
 *   - Transition should be smooth over 150 milliseconds
 */

export default {
  title: '05 Flexbox/19 Footer Columns',
};

export const Starter = () => {
  return (
    <footer>
      <div>
        <h3>Products</h3>
        <div>
          <a href="#">Web Design</a>
          <a href="#">Development</a>
          <a href="#">Marketing</a>
        </div>
      </div>
      
      <div>
        <h3>Company</h3>
        <div>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </div>
      
      <div>
        <h3>Resources</h3>
        <div>
          <a href="#">Blog</a>
          <a href="#">Documentation</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};
