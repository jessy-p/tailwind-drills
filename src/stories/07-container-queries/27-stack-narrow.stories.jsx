/**
 * Drill 27: Component Stacks When Container is Narrow
 * 
 * Requirements:
 * - Outer container (to resize):
 *   - Width 50% (to make it narrower than viewport)
 *   - All-around padding 8 units
 * 
 * - Component container:
 *   - Should be a container query context
 *   - Background white
 *   - 1px border gray (300 shade)
 *   - Large rounded corners
 *   - All-around padding 6 units
 * 
 * - Stats grid:
 *   - Should display as grid
 *   - On small containers (default): 1 column
 *   - On medium containers (@md): 2 columns
 *   - On large containers (@lg): 3 columns
 *   - Gap 4 units
 * 
 * - Each stat item:
 *   - Background gray (50 shade)
 *   - All-around padding 4 units
 *   - Medium rounded corners
 *   - Text should be centered
 * 
 * - Stat number:
 *   - Font size 3xl
 *   - Font weight bold
 *   - Text color blue (600 shade)
 * 
 * - Stat label:
 *   - Text color gray (600 shade)
 *   - Font size small
 *   - Top margin 1 unit
 */

export default {
  title: '07 Container Queries/27 Stack When Narrow',
};

export const Starter = () => {
  return (
    <div className="w-1/2">
      <div>
        <div>
          <div>
            <div>1.2K</div>
            <div>Users</div>
          </div>
          <div>
            <div>48</div>
            <div>Projects</div>
          </div>
          <div>
            <div>99%</div>
            <div>Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};
