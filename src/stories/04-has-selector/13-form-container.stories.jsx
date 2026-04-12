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
    <div className="p-6 border-2 border-gray-300 rounded-lg bg-white has-[input:user-invalid]:border-red-500 has-[input:user-invalid]:bg-red-50 transition-colors duration-200">
      <div>
        <label className="block mb-2 font-medium text-sm">Email Address</label>
        <input
          type="email"
          className="border border-gray-300 rounded-md px-3 py-2 w-full user-invalid:border-red-500"
          required
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
};
