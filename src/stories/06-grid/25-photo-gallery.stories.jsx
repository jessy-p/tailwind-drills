/**
 * Drill 25: Photo Gallery with Varied Sizes
 * 
 * Requirements:
 * - Container:
 *   - Should display as grid
 *   - Should have 4 equal columns
 *   - Gap between items should be 4 units
 *   - All-around padding 8 units
 * 
 * - All items:
 *   - Large rounded corners
 *   - Should hide overflow
 * 
 * - First item (large):
 *   - Should span 2 columns
 *   - Should span 2 rows
 *   - Background blue (300 shade)
 *   - Should display as flex
 *   - Should center content both horizontally and vertically
 *   - Font size 2xl
 *   - Font weight bold
 *   - Text color white
 * 
 * - Items 2-3 (medium):
 *   - Each should span 2 columns
 *   - Each should span 1 row (default)
 *   - Background green (300 shade)
 *   - Should display as flex
 *   - Should center content
 *   - Height 192px
 *   - Font size large
 *   - Text color white
 * 
 * - Items 4-7 (small):
 *   - Each should span 1 column
 *   - Each should span 1 row
 *   - Background purple (300 shade)
 *   - Should display as flex
 *   - Should center content
 *   - Height 192px
 *   - Text color white
 */

export default {
  title: '06 Grid/25 Photo Gallery',
};

export const Starter = () => {
  return (
    <div>
      <div>Large</div>
      <div>Medium</div>
      <div>Medium</div>
      <div>Small</div>
      <div>Small</div>
      <div>Small</div>
      <div>Small</div>
    </div>
  );
};
