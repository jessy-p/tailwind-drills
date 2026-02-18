/**
 * Drill 20: Center Content (Both Axes)
 * 
 * Requirements:
 * - Container:
 *   - Should display as flex
 *   - Should center items horizontally
 *   - Should center items vertically
 *   - Height should be 512px
 *   - Background gradient from blue (500 shade) to purple (600 shade)
 * 
 * - Content box:
 *   - Background white
 *   - All-around padding 8 units
 *   - Large rounded corners
 *   - Large shadow
 *   - Maximum width 384px
 *   - Text should be centered
 * 
 * - Title:
 *   - Font size 2xl
 *   - Font weight bold
 *   - Bottom margin 4 units
 * 
 * - Description:
 *   - Text color gray (600 shade)
 *   - Bottom margin 6 units
 * 
 * - Button:
 *   - Background blue (500 shade)
 *   - Text white
 *   - Horizontal padding 6 units, vertical padding 3 units
 *   - Medium rounded corners
 *   - Font weight medium
 *   - Cursor pointer
 *   - On hover, background should darken to blue (600 shade)
 */

export default {
  title: '05 Flexbox/20 Center Content',
};

export const Starter = () => {
  return (
    <div>
      <div>
        <h2>Welcome Back</h2>
        <p>Sign in to your account to continue</p>
        <button>Sign In</button>
      </div>
    </div>
  );
};
