/**
 * Drill 07: Focus States (focus, focus-visible, focus-within)
 * 
 * Requirements:
 * - All inputs have base styling:
 *   - 1px border in gray (300 shade)
 *   - Medium rounded corners
 *   - Horizontal padding 3 units, vertical padding 2 units
 *   - Full width
 * 
 * - Input 1 (focus):
 *   - When focused, ring should be 2px blue (500 shade)
 *   - Should show ring for both mouse click and keyboard navigation
 * 
 * - Button  (focus-visible):
 *   - When focused via keyboard only, ring should be 2px green (500 shade)
 *   - Should NOT show ring on mouse click
 * 
 * - Container with input 3 (focus-within):
 *   - When any input inside is focused, container background should be blue (50 shade)
 *   - Container should have 4 units padding
 *   - Container corners should be large rounded
 *   - Background transition should be smooth over 200 milliseconds
 */

export default {
  title: '02 Form States/07 Focus States',
};

export const Starter = () => {
  return (
    <div className="p-8 max-w-md space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium">
          Regular focus (shows on click and keyboard)
        </label>
        <input
          type="text"
          placeholder="Click or tab to this input"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block mb-2 text-sm font-medium">
          Focus-visible — keyboard only (try clicking vs tabbing)
        </label>
        <button
          type="button"
          className="bg-white border border-gray-300 rounded-md px-3 py-2 w-full
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          Click me (no ring) · Tab to me (ring appears)
        </button>
      </div>
      
      <div className="focus-within:bg-blue-50 p-4 rounded-lg transition-colors duration-200">
        <label className="block mb-2 text-sm font-medium">
          Focus-within (parent changes when child focused)
        </label>
        <input
          type="text"
          placeholder="Focus changes the container"
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
    </div>
  );
};
