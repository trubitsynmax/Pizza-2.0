import React from "react";
import { Categories, Pizzac, Popup } from "../components/index";
import { useAppSelector } from "../redux/store";

export default function HomePage() {
  const changeItem = useAppSelector((state) => state.items.changeItem);
  return (
    <div>
      <Categories />
      <Pizzac />
      {changeItem && <Popup {...changeItem} {...changeItem.info} />}
    </div>
  );
}
