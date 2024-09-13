import { useContext } from "react";
import { Context } from "../Context";
import "./Menu.css";

export const Menu = () => {
  const { setCurrentPage } = useContext(Context);

  const clickHandler = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="menuContainer">
      <div className="menuItem" onClick={() => clickHandler(2)}>
        Game 1
      </div>
      <div className="menuItem" onClick={() => clickHandler(3)}>
        Game 2
      </div>
      <div className="menuItem" onClick={() => clickHandler(4)}>
        Game 3
      </div>
      <div className="menuItem" onClick={() => clickHandler(5)}>
        Game 4
      </div>
      <div className="menuItem" onClick={() => clickHandler(6)}>
        Game 5
      </div>
    </div>
  );
};
