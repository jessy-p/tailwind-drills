/**
 * Drill 01: Primary Button
 * 
 * Requirements:
 * - Background color should be blue (500 shade)
 * - Horizontal padding should be 4 units, vertical padding should be 2 units
 * - Corners should be medium rounded
 * - Should have a medium shadow
 * - Text should be white and medium weight
 * - Cursor should be a pointer
 * - On hover:
 *   - Background should darken to blue 600 shade
 *   - Shadow should increase to large
 * - All property changes should transition smoothly over 200 milliseconds
 */

export default {
  title: '01 Borders & Spacing/01 Primary Button',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <button className=" bg-blue-500 px-4 py-2 rounded-md shadow-md text-white font-medium cursor-pointer hover:bg-blue-600 hover:shadow-lg transition-all duration-200">Click me</button>
    </div>
  );
};
