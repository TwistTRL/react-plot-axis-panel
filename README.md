# react-plot-axis-panel
This repo currently houses two two-level panel components used in Twist interface. `CollapsibleYPanel` used in medication plot and `LinearSpaceYPanel` used in respiratory score plot.

## Demo


## Examples
```
<CollapsibleYPanel  categoryStructure={this.categoryStructure}
                    useLeaves={useLeaves}
                    rowHeight={rowHeight}
                    width={width}
                    height={height}
                    />
<LinearSpaceYPanel  categoryStructure={this.categoryStructure}
                    minY={minY}
                    maxY={maxY}
                    width={width}
                    height={height}
                    />
```

## Known bugs
When height is too small, a wierd bug will happend and crash the component. Will fix in the future.
