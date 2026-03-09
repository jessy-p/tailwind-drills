/**
 * Drill 10: Show Button on Parent Hover
 * 
 * Requirements:
 * - Card container:
 *   - Should be marked as group
 *   - Background white
 *   - 1px border gray (300 shade)
 *   - Large rounded corners
 *   - All-around padding 6 units
 *   - Maximum width 384px
 * 
 * - Title:
 *   - Font size large
 *   - Font weight semibold
 *   - Bottom margin 2 units
 * 
 * - Description:
 *   - Text color gray (600 shade)
 *   - Bottom margin 4 units
 * 
 * - Button:
 *   - Background blue (500 shade)
 *   - Text white
 *   - Horizontal padding 4 units, vertical padding 2 units
 *   - Medium rounded corners
 *   - Cursor pointer
 *   - Default opacity should be 0 (invisible)
 *   - When parent card is hovered, opacity should be 100 (visible)
 *   - Opacity should transition smoothly over 200 milliseconds
 */

export default {
  title: '03 Parent State/10 Button on Hover',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div className="group bg-white border border-gray-300 rounded-lg p-6 max-w-[384px]">
        <h3 className="text-lg font-semibold mb-2">Hover over this card</h3>
        <p className="text-gray-600 mb-4">A button will appear below</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">Click me</button>
      </div>
    </div>
  );
};
