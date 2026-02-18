/**
 * Drill 15: Card Border Changes When Checkbox Checked
 * 
 * Requirements:
 * - Card container:
 *   - All-around padding 6 units
 *   - 2px border gray (300 shade)
 *   - Large rounded corners
 *   - Background white
 *   - When it contains a checked checkbox, border should change to blue (500 shade)
 *   - When it contains a checked checkbox, background should change to blue (50 shade)
 *   - Border and background transitions should be smooth over 200 milliseconds
 * 
 * - Checkbox:
 *   - Default appearance removed
 *   - 20px by 20px
 *   - 2px border gray (300 shade)
 *   - Slightly rounded corners
 *   - Cursor pointer
 *   - When checked, background blue (500 shade)
 *   - When checked, border blue (500 shade)
 * 
 * - Label:
 *   - Cursor pointer
 *   - Left margin 3 units
 *   - Font weight medium
 * 
 * - Description:
 *   - Top margin 2 units
 *   - Text color gray (600 shade)
 *   - Font size small
 */

export default {
  title: '04 Has Selector/15 Card Checkbox Border',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div>
        <div className="flex items-start">
          <input
            type="checkbox"
            id="feature-1"
          />
          <label htmlFor="feature-1">
            Enable notifications
          </label>
        </div>
        <p>
          Get notified when someone mentions you or responds to your comments
        </p>
      </div>
    </div>
  );
};
