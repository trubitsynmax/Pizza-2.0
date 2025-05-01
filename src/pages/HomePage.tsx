import React from "react";
import { Categories } from "../components/categories/index";
import { Pizzac } from "../components/pizzac/index";
import Popup from "../components/popup/Popup";
import { useAppSelector } from "../redux/store";

const HomePage: React.FC = () => {
  const changeItem = useAppSelector((state) => state.items.changeItem);
  return (
    <div>
      <Categories />
      <Pizzac />
      {changeItem && <Popup {...changeItem} {...changeItem.info} />}
    </div>
  );
};

export default React.memo(HomePage);
