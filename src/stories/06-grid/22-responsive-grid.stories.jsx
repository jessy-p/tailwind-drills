/**
 * Drill 22: Responsive Grid (1 column mobile, 3 desktop)
 * 
 * Requirements:
 * - Container:
 *   - Should display as grid
 *   - On mobile (default): should have 1 column
 *   - On medium screens and up (md breakpoint): should have 3 columns
 *   - Gap between items should be 6 units
 *   - All-around padding 8 units
 * 
 * - Each grid item:
 *   - Background white
 *   - 1px border gray (300 shade)
 *   - Large rounded corners
 *   - All-around padding 6 units
 * 
 * - Image placeholder:
 *   - Width full
 *   - Height 192px
 *   - Background gray (200 shade)
 *   - Large rounded corners
 *   - Bottom margin 4 units
 * 
 * - Title:
 *   - Font size large
 *   - Font weight semibold
 *   - Bottom margin 2 units
 * 
 * - Description:
 *   - Text color gray (600 shade)
 *   - Font size small
 * 
 * Hint: Resize browser to see the grid change from 1 to 3 columns
 */

export default {
  title: '06 Grid/22 Responsive Grid',
};

export const Starter = () => {
  return (
    <div>
      <div>
        <div>{/* Image placeholder */}</div>
        <h3>Card Title 1</h3>
        <p>Description of the first card</p>
      </div>
      <div>
        <div>{/* Image placeholder */}</div>
        <h3>Card Title 2</h3>
        <p>Description of the second card</p>
      </div>
      <div>
        <div>{/* Image placeholder */}</div>
        <h3>Card Title 3</h3>
        <p>Description of the third card</p>
      </div>
    </div>
  );
};
