/**
 * Drill 21: Three Equal Columns
 * 
 * Requirements:
 * - Container:
 *   - Should display as grid
 *   - Should have 3 equal columns
 *   - Gap between items should be 4 units
 *   - All-around padding 8 units
 * 
 * - Each grid item:
 *   - Background white
 *   - 1px border gray (300 shade)
 *   - Large rounded corners
 *   - All-around padding 6 units
 *   - Medium shadow
 * 
 * - Item number:
 *   - Font size 3xl
 *   - Font weight bold
 *   - Text color blue (500 shade)
 *   - Bottom margin 2 units
 * 
 * - Item text:
 *   - Text color gray (600 shade)
 */

export default {
  title: '06 Grid/21 Equal Columns',
};

export const Starter = () => {
  return (
    <div>
      <div>
        <div>1</div>
        <p>First item</p>
      </div>
      <div>
        <div>2</div>
        <p>Second item</p>
      </div>
      <div>
        <div>3</div>
        <p>Third item</p>
      </div>
      <div>
        <div>4</div>
        <p>Fourth item</p>
      </div>
      <div>
        <div>5</div>
        <p>Fifth item</p>
      </div>
      <div>
        <div>6</div>
        <p>Sixth item</p>
      </div>
    </div>
  );
};
