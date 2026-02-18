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
 * - Input 2 (focus-visible):
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
        />
      </div>
      
      <div>
        <label className="block mb-2 text-sm font-medium">
          Focus-visible (keyboard only)
        </label>
        <input
          type="text"
          placeholder="Tab to this input"
        />
      </div>
      
      <div>
        <label className="block mb-2 text-sm font-medium">
          Focus-within (parent changes when child focused)
        </label>
        <input
          type="text"
          placeholder="Focus changes the container"
        />
      </div>
    </div>
  );
};
