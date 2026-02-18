/**
 * Drill 09: Checkbox Label Color on Checked
 * 
 * Requirements:
 * - Checkbox:
 *   - Should be marked as peer for sibling state changes
 *   - Default appearance removed
 *   - 20px by 20px
 *   - 2px border in gray (300 shade)
 *   - Slightly rounded corners
 *   - Cursor pointer
 * 
 * - Checkbox when checked:
 *   - Background blue (500 shade)
 *   - Border blue (500 shade)
 * 
 * - Label:
 *   - Cursor pointer
 *   - Left margin 2 units
 *   - Default text color gray (700 shade)
 *   - When checkbox is checked, text color should be blue (600 shade)
 *   - When checkbox is checked, font weight should be semibold
 *   - Color and font weight should transition smoothly over 200 milliseconds
 */

export default {
  title: '03 Parent State/09 Checkbox Label Color',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="task-1"
        />
        <label htmlFor="task-1">
          Complete this task
        </label>
      </div>
    </div>
  );
};
