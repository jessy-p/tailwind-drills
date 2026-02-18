/**
 * Drill 26: Card Changes Layout Based on Container Width
 * 
 * Requirements:
 * - Outer container (to resize):
 *   - Width should be resizable (use a width like 50% or 400px to test)
 *   - All-around padding 8 units
 * 
 * - Card container:
 *   - Should be a container query context
 *   - Background white
 *   - 1px border gray (300 shade)
 *   - Large rounded corners
 *   - All-around padding 4 units
 * 
 * - Card content:
 *   - On small containers (default): should arrange vertically (flex column)
 *   - On medium containers and up (@md): should arrange horizontally (flex row)
 *   - Gap should be 4 units
 * 
 * - Image placeholder:
 *   - On small: width full, height 128px
 *   - On medium (@md): width 128px (fixed), height 128px, should not shrink
 *   - Background gray (300 shade)
 *   - Medium rounded corners
 * 
 * - Text content:
 *   - On medium (@md): should grow to fill space
 * 
 * - Title:
 *   - Font size large
 *   - Font weight semibold
 *   - Bottom margin 2 units
 * 
 * - Description:
 *   - Text color gray (600 shade)
 *   - Font size small
 * 
 * Hint: Change the outer container width to see the card adapt
 */

export default {
  title: '07 Container Queries/26 Card Container',
};

export const Starter = () => {
  return (
    <div className="w-96">
      <div>
        <div>
          <div>{/* Image placeholder */}</div>
          <div>
            <h3>Responsive Card</h3>
            <p>This card changes from vertical to horizontal based on its container width, not the viewport.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
