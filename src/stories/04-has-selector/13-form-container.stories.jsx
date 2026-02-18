/**
 * Drill 13: Form Container Changes on Invalid Input
 * 
 * Requirements:
 * - Form container:
 *   - All-around padding 6 units
 *   - 2px border in gray (300 shade)
 *   - Large rounded corners
 *   - Background white
 *   - When it contains an invalid input, border should change to red (500 shade)
 *   - When it contains an invalid input, background should change to red (50 shade)
 *   - Border and background transitions should be smooth over 200 milliseconds
 * 
 * - Label:
 *   - Display as block
 *   - Bottom margin 2 units
 *   - Font size small
 *   - Font weight medium
 * 
 * - Input:
 *   - 1px border gray (300 shade)
 *   - Medium rounded corners
 *   - Horizontal padding 3 units, vertical padding 2 units
 *   - Full width
 *   - When invalid, border should be red (500 shade)
 * 
 * Hint: Try typing an invalid email to see the container change
 */

export default {
  title: '04 Has Selector/13 Form Container Invalid',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div>
        <label>Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
};
