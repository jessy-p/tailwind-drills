/**
 * Drill 12: Accordion Item
 * 
 * Requirements:
 * - Container:
 *   - Background white
 *   - 1px border gray (300 shade)
 *   - Large rounded corners
 *   - Maximum width 512px (md breakpoint)
 * 
 * - Checkbox (toggle):
 *   - Should be marked as peer
 *   - Should be hidden from view (but still functional)
 * 
 * - Header/Label:
 *   - Should display as flex
 *   - Should justify content between items (title left, icon right)
 *   - Should align items center
 *   - All-around padding 4 units
 *   - Cursor pointer
 *   - Font weight medium
 * 
 * - Arrow icon (span):
 *   - Should display the text "▼"
 *   - Default rotation 0 degrees
 *   - When checkbox is checked, should rotate -180 degrees
 *   - Transform should transition smoothly over 200 milliseconds
 * 
 * - Content area:
 *   - Horizontal padding 4 units
 *   - Default max height should be 0
 *   - Should hide overflow
 *   - When checkbox is checked, max height should be 200px
 *   - Default opacity 0
 *   - When checkbox is checked, opacity should be 100
 *   - Max height and opacity should transition smoothly over 300 milliseconds
 * 
 * - Content paragraph:
 *   - Bottom padding 4 units
 *   - Text color gray (600 shade)
 */

export default {
  title: '03 Parent State/12 Accordion',
};

export const Starter = () => {
  return (
    <div className="p-8 bg-white border border-gray-300 rounded-lg md:max-w-lg">
      <div>
        <input type="checkbox" id="accordion-1" className="peer hidden"/>
        <label htmlFor="accordion-1" className="flex justify-between items-center p-4 cursor-pointer font-medium peer-checked:[&_span:last-child]:rotate-180">
          <span>What is Tailwind CSS?</span>
          <span className="transform duration-200">▼</span>
        </label>
        <div className="px-4 max-h-0 peer-checked:max-h-50 invisible opacity-0 peer-checked:visible peer-checked:opacity-100 transition-all duration-300 overflow-hidden">
          <p className="pb-4 text-gray-600">
            Tailwind CSS is a utility-first CSS framework that provides
            low-level utility classes to build custom designs without leaving
            your HTML.
          </p>
        </div>
      </div>
    </div>
  );
};
