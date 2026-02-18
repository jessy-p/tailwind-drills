/**
 * Drill 30: Button with Smooth Transitions
 * 
 * Requirements:
 * - Container:
 *   - All-around padding 8 units
 *   - Should display as flex
 *   - Gap between buttons 4 units
 * 
 * - Button 1 (Color transition):
 *   - Background blue (500 shade)
 *   - Text white
 *   - Horizontal padding 6 units, vertical padding 3 units
 *   - Medium rounded corners
 *   - Font weight medium
 *   - On hover: background should change to blue (600 shade)
 *   - On hover: should scale to 105%
 *   - Only colors should transition
 *   - Duration should be 150 milliseconds
 * 
 * - Button 2 (Shadow transition):
 *   - Background white
 *   - Text gray (700 shade)
 *   - 1px border gray (300 shade)
 *   - Horizontal padding 6 units, vertical padding 3 units
 *   - Medium rounded corners
 *   - Font weight medium
 *   - Default shadow: medium
 *   - On hover: shadow should increase to extra large
 *   - On hover: border should change to gray (400 shade)
 *   - Only shadow should transition
 *   - Duration should be 300 milliseconds
 * 
 * - Button 3 (Transform transition):
 *   - Background gradient from purple (500) to pink (500)
 *   - Text white
 *   - Horizontal padding 6 units, vertical padding 3 units
 *   - Medium rounded corners
 *   - Font weight medium
 *   - On hover: should scale to 110%
 *   - On hover: should rotate 2 degrees
 *   - Only transform should transition
 *   - Duration should be 200 milliseconds
 *   - Timing function should be ease-in-out
 */

export default {
  title: '09 Transitions/30 Button Transitions',
};

export const Starter = () => {
  return (
    <div>
      <button>Color Transition</button>
      <button>Shadow Transition</button>
      <button>Transform Transition</button>
    </div>
  );
};
