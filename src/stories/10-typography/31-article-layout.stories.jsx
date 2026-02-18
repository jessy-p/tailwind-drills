/**
 * Drill 31: Article Layout with Typography
 * 
 * Requirements:
 * - Container:
 *   - Maximum width 768px (prose width)
 *   - Horizontal margin auto (centers it)
 *   - All-around padding 8 units
 * 
 * - Main heading (h1):
 *   - Font size: 3xl on mobile, 4xl on medium screens and up
 *   - Font weight bold
 *   - Text color gray (900 shade)
 *   - Bottom margin 4 units
 *   - Line height tight
 * 
 * - Subheading (h2):
 *   - Font size: xl on mobile, 2xl on medium screens and up
 *   - Font weight semibold
 *   - Text color gray (800 shade)
 *   - Bottom margin 3 units
 *   - Top margin 6 units
 * 
 * - Paragraph:
 *   - Font size base
 *   - Text color gray (700 shade)
 *   - Bottom margin 4 units
 *   - Line height relaxed
 * 
 * - Lead paragraph (first paragraph):
 *   - Font size: base on mobile, lg on medium screens and up
 *   - Text color gray (600 shade)
 *   - Font weight normal
 *   - Bottom margin 6 units
 * 
 * - Emphasized text (em):
 *   - Should be italic
 *   - Text color gray (900 shade)
 * 
 * - Strong text (strong):
 *   - Font weight semibold
 *   - Text color gray (900 shade)
 * 
 * - Link (a):
 *   - Text color blue (600 shade)
 *   - Should be underlined
 *   - On hover: text color blue (800 shade)
 */

export default {
  title: '10 Typography/31 Article Layout',
};

export const Starter = () => {
  return (
    <article>
      <h1>Understanding Modern Web Typography</h1>
      
      <p>
        Typography is the art and technique of arranging type to make written
        language legible, readable, and appealing when displayed.
      </p>
      
      <p>
        The choice of <strong>typeface</strong>, point size, line length, and
        spacing all contribute to the overall <em>readability</em> and aesthetic
        of text on a page or screen.
      </p>
      
      <h2>The Importance of Hierarchy</h2>
      
      <p>
        Visual hierarchy in typography helps guide readers through content,
        making it easier to scan and understand the structure of information.
        Learn more about <a href="#">typography best practices</a>.
      </p>
      
      <p>
        Responsive typography adapts to different screen sizes, ensuring optimal
        readability across devices from mobile phones to large desktop monitors.
      </p>
    </article>
  );
};
