import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./styles.scss";

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

const VirtualizedjList = () => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={250}
        itemCount={500}
        itemSize={35}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);

export default VirtualizedjList;

// https://codesandbox.io/p/sandbox/3vnx878jk5?file=%2Fstyles.css%3A31%2C1
