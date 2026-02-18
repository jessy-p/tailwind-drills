/**
 * Drill 18: Three Items (Middle Grows, Others Fixed)
 * 
 * Requirements:
 * - Container:
 *   - Should display as flex
 *   - Gap between items should be 4 units
 *   - All-around padding 8 units
 * 
 * - First box (left):
 *   - Width should be 192px (fixed)
 *   - Should not shrink
 *   - Height 128px
 *   - Background blue (200 shade)
 *   - Large rounded corners
 *   - Should display as flex
 *   - Should center content both horizontally and vertically
 * 
 * - Second box (middle):
 *   - Should grow to fill remaining space
 *   - Should not shrink
 *   - Height 128px
 *   - Background green (200 shade)
 *   - Large rounded corners
 *   - Should display as flex
 *   - Should center content both horizontally and vertically
 * 
 * - Third box (right):
 *   - Width should be 192px (fixed)
 *   - Should not shrink
 *   - Height 128px
 *   - Background purple (200 shade)
 *   - Large rounded corners
 *   - Should display as flex
 *   - Should center content both horizontally and vertically
 * 
 * Hint: Resize the browser window to see the middle box grow and shrink
 */

export default {
  title: '05 Flexbox/18 Flex Grow',
};

export const Starter = () => {
  return (
    <div>
      <div>
        <div>Fixed Width</div>
      </div>
      <div>
        <div>Grows</div>
      </div>
      <div>
        <div>Fixed Width</div>
      </div>
    </div>
  );
};
