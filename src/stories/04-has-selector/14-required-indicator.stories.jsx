/**
 * Drill 14: Required Field Indicator
 *
 * Requirements:
 * - Label:
 *   - Bottom margin 2 units
 *   - Font size small
 *   - Font weight medium
 *  
 * - Red asterisk (using ::after pseudo-element):
 *   - Content should be "*"
 *   - Text color should be red (500 shade)
 *   - Should only appear when the input is required
 *   - Hint: Use the :has() selector to conditionally apply ::after
 *
 * - Input:
 *   - 1px border gray (300 shade)
 *   - Medium rounded corners
 *   - Horizontal padding 3 units, vertical padding 2 units
 *
 *
 * Hint: The asterisk should only show for the required field.
 * Hint: In Tailwind, pseudo-elements and :has() can be chained as variants.
 */

export default {
  title: '04 Has Selector/14 Required Indicator',
};

export const Starter = () => {
  return (
    <div className="p-8 max-w-md space-y-4">
      <div className="after:inline has-[input:required]:after:content-['*'] has-[input:required]:after:text-red-500">
        <label 
          className="mb-2 text-sm font-medium" 
          for="email">
          Email (required)
        </label>
        <input
          id="email"
          type="email"
          required
          className="border border-gray-300 rounded-md px-3 py-2 m-2"
        />
      </div>
      

      <div className="after:inline has-[input:required]:after:content-['*'] has-[input:required]:after:text-red-500">
        <label 
          className="mb-2 text-sm font-medium" 
          for="phone">
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          className="border border-gray-300 rounded-md px-3 py-2 m-2"
        />
      </div>
    </div>
  );
};
