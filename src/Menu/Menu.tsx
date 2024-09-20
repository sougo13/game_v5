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
        Корзинки овощей и фруктов
      </div>
      <div className="menuItem" onClick={() => clickHandler(3)}>
        Что лишнее?
      </div>
      <div className="menuItem" onClick={() => clickHandler(4)}>
        Скажи наоборот
      </div>
      <div className="menuItem" onClick={() => clickHandler(5)}>
        Предлоги
      </div>
      <div className="menuItem" onClick={() => clickHandler(6)}>
        Кто, что ест?
      </div>
    </div>
  );
};
