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
      <div className="bg-white border border-gray-300 rounded-lg max-w-[384px]">
        <ul className="divide-y divide-gray-200">
          <li className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-150">First item</li>
          <li className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-150">Second item</li>
          <li className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-150">Third item</li>
          <li className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-150">Fourth item</li>
        </ul>
      </div>
    </div>
  );
};
