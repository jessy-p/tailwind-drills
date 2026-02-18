/**
 * Drill 04: Input Validation States
 * 
 * Requirements:
 * - Input field base styling:
 *   - Should have a 1px border in gray (300 shade)
 *   - Corners should be medium rounded
 *   - Horizontal padding 3 units, vertical padding 2 units
 *   - Width should fill the container
 * 
 * - When focused:
 *   - Should have no default outline
 *   - Should have a 2px ring in blue (500 shade)
 *   - Border should change to blue (500 shade)
 * 
 * - When invalid (user has interacted):
 *   - Border should be red (500 shade)
 *   - Ring should be red (500 shade)
 * 
 * - When valid:
 *   - Border should be green (500 shade)
 *   - Ring should be green (500 shade)
 * 
 * - Placeholder text should be gray (400 shade)
 */

export default {
  title: '02 Form States/04 Input Validation',
};

export const Starter = () => {
  return (
    <div className="p-8 max-w-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">
            Email (required)
          </label>
          <input
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium">
            Name (optional)
          </label>
          <input
            type="text"
            placeholder="Enter your name"
          />
        </div>
      </div>
    </div>
  );
};
