/**
 * Drill 03: List with Dividers
 * 
 * Requirements:
 * - Container:
 *   - Background should be white
 *   - Should have a 1px border in gray (300 shade)
 *   - Corners should be large rounded
 *   - Maximum width should be 384px
 * 
 * - List:
 *   - Should have divider lines between items (gray 200 shade)
 * 
 * - Each list item:
 *   - All-around padding should be 4 units
 *   - On hover, background should change to gray (50 shade)
 *   - Background color should transition smoothly over 150 milliseconds
 */

export default {
  title: '01 Borders & Spacing/03 List Dividers',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </div>
    </div>
  );
};
