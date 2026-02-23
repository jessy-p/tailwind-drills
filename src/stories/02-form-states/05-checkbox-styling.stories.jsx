/**
 * Drill 05: Custom Checkbox Styling
 * 
 * Requirements:
 * - Checkbox:
 *   - Default browser appearance should be removed
 *   - Should be 20px by 20px
 *   - Should have a 2px border in gray (300 shade)
 *   - Corners should be slightly rounded
 *   - Background should be white
 *   - Cursor should be pointer
 * 
 * - When checked:
 *   - Background should be blue (500 shade)
 *   - Border should be blue (500 shade)
 * 
 * - When focused:
 *   - Should have a 2px ring in blue (500 shade) with some offset
 * 
 * - Label:
 *   - Cursor should be pointer
 *   - Left margin should be 2 units
 */

export default {
  title: '02 Form States/05 Checkbox Styling',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="custom-checkbox"
          className="appearance-none w-5 h-5 border-2 border-gray-300 cursor-pointer rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        />
        <label htmlFor="custom-checkbox" className="cursor-pointer ml-2">
          I agree to the terms and conditions
        </label>
      </div>
    </div>
  );
};
