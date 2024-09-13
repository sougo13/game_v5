import { FC } from "react";
import "./Grid.css";

type TGrid = {
  children: JSX.Element;
};

export const Grid: FC<TGrid> = ({ children }) => {
  return <div className="gridContainer">{children}</div>;
};

type TGridItem = {
  position: {
    colStart: number;
    colEnd: number;
    rowStart: number;
    rowEnd: number;
  };
  children?: JSX.Element;
};

export const GridItem: FC<TGridItem> = (props) => {
  const {
    children,
    position: { colEnd, colStart, rowEnd, rowStart },
  } = props;

  return (
    <div
      className="gridItem"
      style={{
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
      }}
    >
      {children}
    </div>
  );
};
