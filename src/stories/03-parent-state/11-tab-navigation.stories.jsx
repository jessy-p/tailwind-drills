/**
 * Drill 11: Tab Navigation with Active State
 * 
 * Requirements:
 * - Tab container:
 *   - Should display as flex
 *   - Should have a 1px bottom border in gray (200 shade)
 * 
 * - Each tab button:
 *   - Should be marked as peer (for the first tab to affect indicator)
 *   - Horizontal padding 4 units, vertical padding 2 units
 *   - Font weight medium
 *   - Text color gray (600 shade)
 *   - Position should be relative (for absolutely positioned indicator)
 *   - Cursor pointer
 * 
 * - Tab button on hover (when not selected):
 *   - Text color should change to gray (900 shade)
 * 
 * - Selected tab (first tab - use aria-selected="true"):
 *   - Text color should be blue (600 shade)
 * 
 * - Active indicator (span element):
 *   - Position should be absolute
 *   - Should be at the bottom (0)
 *   - Should be at the left (0)
 *   - Width should fill container
 *   - Height should be 2px
 *   - Background should be blue (500 shade)
 *   - Should only be visible for the selected tab
 */

export default {
  title: '03 Parent State/11 Tab Navigation',
};

export const Starter = () => {
  return (
    <div className="p-8 max-w-md">
      <div>
        <button aria-selected="true">
          Profile
          <span></span>
        </button>
        <button>
          Settings
          <span className="hidden"></span>
        </button>
        <button>
          Notifications
          <span className="hidden"></span>
        </button>
      </div>
    </div>
  );
};
