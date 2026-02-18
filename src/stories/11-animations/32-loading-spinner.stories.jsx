/**
 * Drill 32: Loading Spinner Animation
 * 
 * Requirements:
 * - Container:
 *   - All-around padding 8 units
 *   - Should display as flex
 *   - Should center items both horizontally and vertically
 *   - Height 384px
 * 
 * - Loading card:
 *   - Background white
 *   - All-around padding 8 units
 *   - Large rounded corners
 *   - Large shadow
 *   - Should display as flex
 *   - Should arrange children vertically
 *   - Should center items horizontally
 *   - Gap 4 units
 * 
 * - Spinner (circular):
 *   - Width and height 64px
 *   - Should have a 4px border
 *   - Border color: gray (200 shade) for most of the circle
 *   - Top border color: blue (600 shade) to show the spinning part
 *   - Should be perfectly round
 *   - Should animate with continuous spin
 * 
 * - Loading text:
 *   - Text color gray (600 shade)
 *   - Font weight medium
 *   - Should pulse (animate with pulse animation)
 * 
 * - Status text:
 *   - Font size small
 *   - Text color gray (500 shade)
 * 
 * Hint: The spinner should rotate continuously and the text should pulse
 */

export default {
  title: '11 Animations/32 Loading Spinner',
};

export const Starter = () => {
  return (
    <div>
      <div>
        <div>
          {/* Spinner circle */}
        </div>
        <p>Loading...</p>
        <p>Please wait while we fetch your data</p>
      </div>
    </div>
  );
};
