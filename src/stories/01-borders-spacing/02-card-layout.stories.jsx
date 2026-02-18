/**
 * Drill 02: Card Layout
 * 
 * Requirements:
 * - Card container:
 *   - Background should be white
 *   - Should have a 1px border in gray (300 shade)
 *   - Corners should be large rounded
 *   - Should have a medium shadow
 *   - Maximum width should be 384px (sm breakpoint)
 * 
 * - Image:
 *   - Width should fill the container
 *   - Height should be 192px
 *   - Should cover the area maintaining aspect ratio
 *   - Background should be gray (200 shade)
 *   - Top corners should match card rounding
 * 
 * - Content area:
 *   - All-around padding should be 6 units
 * 
 * - Title:
 *   - Font size should be extra large
 *   - Font weight should be bold
 *   - Bottom margin should be 2 units
 * 
 * - Description:
 *   - Text color should be gray (600 shade)
 */

export default {
  title: '01 Borders & Spacing/02 Card Layout',
};

export const Starter = () => {
  return (
    <div className="p-8">
      <div className="border-gray-300 border rounded-lg shadow-md max-w-[384px]">
        <div>
          <img className="w-full h-[192px] object-cover bg-gray-200 rounded-t-lg" src="https://picsum.photos/300/200" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Card Title</h3>
          <p className="text-gray-600">
            This is a description of the card content. It provides additional
            information about the card.
          </p>
        </div>
      </div>
    </div>
  );
};
