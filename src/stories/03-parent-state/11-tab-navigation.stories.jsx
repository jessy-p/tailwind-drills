/**
 * Drill 11: Tab Navigation with Active State
 * 
 * Requirements:
 * - Tab container:
 *   - Should display as flex (horizontal row)
 *   - Should have a 1px bottom border in gray (200 shade)
 * 
 * - Each tab button:
 *   - Should be marked as group (for child indicator to react to parent state)
 *   - Horizontal padding 4 units, vertical padding 2 units
 *   - Font weight medium
 *   - Text color gray (600 shade)
 *   - Position should be relative (for absolutely positioned indicator)
 *   - Cursor pointer
 * 
 * - Tab button on hover (when not selected):
 *   - Text color should change to gray (900 shade)
 * 
 * - Selected tab (use aria-selected="true"):
 *   - Text color should be blue (600 shade)
 * 
 * - Active indicator (span element inside button):
 *   - Position should be absolute
 *   - Should be at the bottom (0)
 *   - Should be at the left (0)
 *   - Width should fill parent button
 *   - Height should be 2px
 *   - Background should be blue (500 shade)
 *   - Should be invisible by default
 *   - Should only be visible when parent button has aria-selected="true"
 */

export default {
  title: '03 Parent State/11 Tab Navigation',
};

export const Starter = () => {
  return (
    <div className="p-8 max-w-md flex border-b border-gray-200">
      <div>
        <button aria-selected="true" className="group px-4 py-2 font-medium text-gray-600 aria-selected:text-blue-600 cursor-pointer relative hover:text-gray-900">
          Profile
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 invisible group-aria-selected:visible"></span>
        </button>
        <button className="group px-4 py-2 font-medium text-gray-600 aria-selected:text-blue-600 cursor-pointer relative hover:text-gray-900">
          Settings
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 invisible group-aria-selected:visible"></span>
        </button>
        <button className="group px-4 py-2 font-medium text-gray-600 aria-selected:text-blue-600 cursor-pointer relative hover:text-gray-900">
          Notifications
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 invisible group-aria-selected:visible"></span>
        </button>
      </div>
    </div>
  );
};
