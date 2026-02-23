/**
 * Drill 06: Disabled vs Enabled States
 * 
 * Requirements:
 * - Both inputs should have base styling:
 *   - 1px border in gray (300 shade)
 *   - Medium rounded corners
 *   - Horizontal padding 3 units, vertical padding 2 units
 *   - Full width
 * 
 * - Enabled input:
 *   - Background should be white
 *   - When focused, should have 2px blue (500 shade) ring
 *   - Cursor should be text cursor - default
 * 
 * - Disabled input:
 *   - Background should be gray (100 shade)
 *   - Opacity should be 50%
 *   - Cursor should show not-allowed
 *   - Text color should be gray (500 shade)
 */

export default {
  title: '02 Form States/06 Disabled vs Enabled',
};

export const Starter = () => {
  return (
    <div className="p-8 max-w-md space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium">
          Enabled Input
        </label>
        <input
          type="text"
          placeholder="You can type here"
          className="border border-gray-300 rounded-md px-3 py-2 w-full enabled:bg-white focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:text-gray-500"
        />
      </div>
      
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-500">
          Disabled Input
        </label>
        <input
          type="text"
          disabled
          placeholder="You cannot type here"
          className="border border-gray-300 rounded-md px-3 py-2 w-full enabled:bg-white focus:ring-2 focus:ring-blue-500 enabled:cursor-text disabled:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:text-gray-500"
        />
      </div>
    </div>
  );
};
