/**
 * Drill 08: Image Scale on Card Hover
 * 
 * Requirements:
 * - Card container:
 *   - Should be marked as a group for child state changes
 *   - Background white
 *   - 1px border in gray (300 shade)
 *   - Large rounded corners
 *   - Medium shadow
 *   - Maximum width 384px
 *   - Should hide any overflow content
 * 
 * - Image container:
 *   - Width fills container
 *   - Height 192px
 *   - Background gray (300 shade)
 *   - Should hide overflow
 *   - Top corners should be large rounded
 * 
 * - Image:
 *   - Width and height should fill container
 *   - When parent card is hovered, should scale to 110%
 *   - Transform should transition smoothly over 300 milliseconds
 * 
 * - Content area:
 *   - All-around padding 6 units
 * 
 * - Title:
 *   - Font size large
 *   - Font weight semibold
 */

export default {
  title: '03 Parent State/08 Image Scale on Hover',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div>
        <div>
          <div>
            {/* Placeholder for image */}
          </div>
        </div>
        <div>
          <h3>Hover over this card</h3>
          <p className="text-gray-600">The image should scale up smoothly</p>
        </div>
      </div>
    </div>
  );
};
