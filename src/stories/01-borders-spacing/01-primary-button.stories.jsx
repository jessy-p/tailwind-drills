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
      <button>Click me</button>
    </div>
  );
};
