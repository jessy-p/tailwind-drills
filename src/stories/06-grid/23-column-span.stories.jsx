/**
 * Drill 23: Item Spans 2 Columns
 * 
 * Requirements:
 * - Container:
 *   - Should display as grid
 *   - Should have 4 equal columns
 *   - Gap between items should be 4 units
 *   - All-around padding 8 units
 * 
 * - First item (featured):
 *   - Should span 2 columns
 *   - Background blue (500 shade)
 *   - Text color white
 *   - All-around padding 6 units
 *   - Large rounded corners
 *   - Font size extra large
 *   - Font weight bold
 *   - Should display as flex
 *   - Should center content both horizontally and vertically
 *   - Height 192px
 * 
 * - Other items:
 *   - Each should span 1 column (default)
 *   - Background gray (100 shade)
 *   - All-around padding 4 units
 *   - Medium rounded corners
 *   - Should display as flex
 *   - Should center content both horizontally and vertically
 *   - Height 128px
 */

export default {
  title: '06 Grid/23 Column Span',
};

export const Starter = () => {
  return (
    <div>
      <div>Featured Item</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </div>
  );
};
