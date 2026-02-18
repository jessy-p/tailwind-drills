/**
 * Drill 17: Horizontal Card (Image Left, Content Right with flex-1)
 * 
 * Requirements:
 * - Card container:
 *   - Should display as flex
 *   - Background white
 *   - 1px border gray (300 shade)
 *   - Large rounded corners
 *   - Should hide overflow
 *   - Medium shadow
 *   - Maximum width 768px (lg breakpoint)
 * 
 * - Image container:
 *   - Width should be 256px (fixed)
 *   - Background gray (300 shade)
 *   - Should not shrink when space is tight
 * 
 * - Content container:
 *   - Should grow to fill remaining space
 *   - All-around padding 6 units
 *   - Should display as flex
 *   - Should arrange children vertically
 *   - Should distribute space between title and button (title at top, button at bottom)
 * 
 * - Title:
 *   - Font size 2xl
 *   - Font weight bold
 *   - Bottom margin 2 units
 * 
 * - Description:
 *   - Text color gray (600 shade)
 * 
 * - Button:
 *   - Background blue (500 shade)
 *   - Text white
 *   - Horizontal padding 4 units, vertical padding 2 units
 *   - Medium rounded corners
 *   - Should align itself to the start (left)
 *   - Cursor pointer
 */

export default {
  title: '05 Flexbox/17 Horizontal Card',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div>
        <div>
          {/* Image placeholder */}
        </div>
        <div>
          <div>
            <h2>Card Title</h2>
            <p>
              This is a description that explains what this card is about. The
              content area grows to fill the remaining space.
            </p>
          </div>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};
