/**
 * Drill 24: Blog Layout (Sidebar + Main Content)
 * 
 * Requirements:
 * - Container:
 *   - Should display as grid
 *   - Should have 4 equal columns
 *   - Gap between areas should be 6 units
 *   - All-around padding 8 units
 *   - Minimum height 512px
 * 
 * - Sidebar:
 *   - Should span 1 column
 *   - Background gray (100 shade)
 *   - All-around padding 6 units
 *   - Large rounded corners
 * 
 * - Sidebar title:
 *   - Font size large
 *   - Font weight bold
 *   - Bottom margin 4 units
 * 
 * - Sidebar links:
 *   - Should display as flex
 *   - Should arrange vertically
 *   - Gap between links should be 2 units
 * 
 * - Each sidebar link:
 *   - Text color gray (600 shade)
 *   - On hover, text color should be blue (600 shade)
 * 
 * - Main content:
 *   - Should span 3 columns
 *   - Background white
 *   - 1px border gray (300 shade)
 *   - All-around padding 8 units
 *   - Large rounded corners
 * 
 * - Article title:
 *   - Font size 2xl
 *   - Font weight bold
 *   - Bottom margin 4 units
 * 
 * - Article content:
 *   - Text color gray (700 shade)
 *   - Line height relaxed
 */

export default {
  title: '06 Grid/24 Blog Layout',
};

export const Starter = () => {
  return (
    <div>
      <aside>
        <h3>Categories</h3>
        <nav>
          <a href="#">Technology</a>
          <a href="#">Design</a>
          <a href="#">Business</a>
          <a href="#">Marketing</a>
        </nav>
      </aside>
      
      <main>
        <h1>Understanding Grid Layouts</h1>
        <p>
          CSS Grid is a powerful layout system that allows you to create
          complex, responsive layouts with ease. In this article, we'll explore
          how to use CSS Grid to build a traditional blog layout with a sidebar
          and main content area.
        </p>
        <p>
          The grid system works by dividing your container into columns and
          rows, which you can then use to position your content precisely where
          you want it.
        </p>
      </main>
    </div>
  );
};
