/**
 * Drill 14: Required Field Indicator
 * 
 * Requirements:
 * - Label:
 *   - Display as block
 *   - Bottom margin 2 units
 *   - Font size small
 *   - Font weight medium
 *   - Position should be relative (for absolutely positioned indicator)
 *   - When it contains a required input, should show a red asterisk after the text
 * 
 * - Red asterisk (using ::after pseudo-element):
 *   - Content should be " *"
 *   - Text color should be red (500 shade)
 *   - Should only appear when label contains a required input
 * 
 * - Input:
 *   - 1px border gray (300 shade)
 *   - Medium rounded corners
 *   - Horizontal padding 3 units, vertical padding 2 units
 *   - Full width
 * 
 * Hint: The asterisk should only show for the required field
 */

export default {
  title: '04 Has Selector/14 Required Indicator',
};

export const Starter = () => {
  return (
    <div className="p-8 max-w-md space-y-4">
      <div>
        <label>
          Email (required)
          <input
            type="email"
            required
          />
        </label>
      </div>
      
      <div>
        <label>
          Phone (optional)
          <input
            type="tel"
          />
        </label>
      </div>
    </div>
  );
};
